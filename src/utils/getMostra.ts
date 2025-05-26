import { urqlClient } from "./urlClient";

type Mostras = "atravessamentos" | "acervo" | "homenagem" | "especial";

const queryNameMap: Record<Mostras, string> = {
  atravessamentos: "atravessamentos",
  acervo: "mostraacervos",
  homenagem: "homenagens",
  especial: "especiais",
};

const slugPaginaMap: Record<Mostras, string> = {
  atravessamentos: "mostra-atravessamentos",
  acervo: "mostra-acervo",
  homenagem: "mostra-homenagem",
  especial: "mostra-especial",
};

const slugToNomeMostraMap: Record<string, Mostras> = {
  atravessamentos: "atravessamentos",
  acervo: "acervo",
  homenagem: "homenagem",
  especial: "especial",
};

export async function getMostra(nomeMostra: Mostras) {
  const queryName = queryNameMap[nomeMostra];
  const slugPagina = slugPaginaMap[nomeMostra];

  const isAcervo = nomeMostra === "acervo";

  const query = `
    query ($slug: ID!) {
      ${queryName} {
        nodes {
          title
          content
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          ${isAcervo ? "informacoesMostraAcervo" : "informacoesSessao"} {
            dataInicial
            local
            filmes {
              ... on ${isAcervo ? "Acervo" : "Filme"} {
                title
                slug
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                ${isAcervo ? "informacoesAcervo" : "informacoesFilmes"} {
                  fichaTecMini
                }
              }
            }
          }
        }
      }
      page(id: $slug, idType: URI) {
        title
        content
      }
    }
  `;

  const variables = { slug: slugPagina };

  const res = await urqlClient.query(query, variables).toPromise();

  if (res.error) {
    console.error("Erro na query Mostra:", res.error);
    throw new Error("Erro ao buscar dados da Mostra");
  }

  const nodes = res.data?.[queryName]?.nodes;
  const page = res.data?.page;

  if (!nodes || !page) {
    console.error("Dados não encontrados para a Mostra:", nomeMostra);
    throw new Error(`Mostra ${nomeMostra} não encontrada`);
  }

  const informacoesKey = isAcervo ? "informacoesMostraAcervo" : "informacoesSessao";

  const nodesNormalizados = nodes.map((node: any) => ({
    ...node,
    informacoesSessao: node[informacoesKey],
  }));

  return {
    nodes: nodesNormalizados,
    pageContent: page.content,
  };
}