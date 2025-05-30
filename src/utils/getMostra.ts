import { urqlClient } from "./urlClient";

type Mostras = "atravessamentos" | "homenagem" | "especial";

const queryNameMap: Record<Mostras, string> = {
  atravessamentos: "atravessamentos",
  homenagem: "homenagens",
  especial: "especiais",
};

const slugPaginaMap: Record<Mostras, string> = {
  atravessamentos: "mostra-atravessamentos",
  homenagem: "mostra-homenagem",
  especial: "mostra-especial",
};

const slugToNomeMostraMap = {
  atravessamentos: "atravessamentos",
  homenagem: "homenagem",
  especial: "especial",
} as const;

const queries = {
  atravessamentos: `
    query ($slug: ID!) {
      atravessamentos {
        nodes {
          title
          content
          slug
          featuredImage { node { sourceUrl } }
          informacoesSessao {
            dataInicial
            local
            filmes {
              ... on Filme {
                title
                slug
                featuredImage { node { sourceUrl } }
                informacoesFilmes { fichaTecMini }
              }
            }
          }
        }
      }
      page(id: $slug, idType: URI) {
        title
        content
      }
        anteriores(first: 1000) {
      nodes {
        title
        featuredImage { node { sourceUrl } }
        informacoesFilmes {
          fichaTecMini
          mostra
        }
      }
    }
    }
  `,
  homenagem: `
    query ($slug: ID!) {
      homenagens {
        nodes {
          title
          content
          slug
          featuredImage { node { sourceUrl } }
          informacoesSessao {
            dataInicial
            local
            filmes {
              ... on Filme {
                title
                slug
                featuredImage { node { sourceUrl } }
                informacoesFilmes { fichaTecMini }
              }
            }
          }
        }
      }
      page(id: $slug, idType: URI) {
        title
        content
      }
        anteriores(first: 1000) {
      nodes {
        title
        featuredImage { node { sourceUrl } }
        informacoesFilmes {
          fichaTecMini
          mostra
        }
      }
    }
    }
  `,
  especial: `
    query ($slug: ID!) {
      especiais {
        nodes {
          title
          content
          slug
          featuredImage { node { sourceUrl } }
          informacoesSessao {
            dataInicial
            local
            filmes {
              ... on Filme {
                title
                slug
                featuredImage { node { sourceUrl } }
                informacoesFilmes { fichaTecMini }
              }
            }
          }
        }
      }
      page(id: $slug, idType: URI) {
        title
        content
      }
        anteriores(first: 1000) {
      nodes {
        title
        featuredImage { node { sourceUrl } }
        informacoesFilmes {
          fichaTecMini
          mostra
        }
      }
    }
    }
  `,
};

export async function getMostra(nomeMostra: Mostras) {
  const queryName = queryNameMap[nomeMostra];
  const slugPagina = slugPaginaMap[nomeMostra];

  const query = queries[nomeMostra];

  const variables = { slug: slugPagina };

  const res = await urqlClient.query(query, variables).toPromise();

  if (res.error) {
    console.error("Erro na query Mostra:", res.error);
    throw new Error("Erro ao buscar dados da Mostra");
  }

  const nodes = res.data?.[queryName]?.nodes;
  const page = res.data?.page;
  const anteriores = res.data?.anteriores?.nodes || [];

  if (!nodes || !page) {
    console.error("Dados não encontrados para a Mostra:", nomeMostra);
    throw new Error(`Mostra ${nomeMostra} não encontrada`);
  }

  
  return {
    nodes,
    pageContent: page.content,
    infoKey: "informacoesSessao",
    anteriores,
  };
}

export function getNomeMostraFromSlug(slug: keyof typeof slugToNomeMostraMap): Mostras {
  const nomeMostra = slugToNomeMostraMap[slug];
  if (!nomeMostra) {
    throw new Error(`Slug inválido: ${slug}`);
  }
  return nomeMostra;
}