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
    }
  `,
  acervo: `
    query ($slug: ID!) {
      mostraacervos {
        nodes {
          title
          content
          slug
          featuredImage { node { sourceUrl } }
          informacoesMostraAcervo {
            dataInicial
            local
            filmes {
              ... on Acervo {
                title
                slug
                featuredImage { node { sourceUrl } }
                informacoesAcervo { fichaTecMini }
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
    }
  `,
};

export async function getMostra(nomeMostra: Mostras) {
  const queryName = queryNameMap[nomeMostra] as keyof typeof res.data;
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

  if (!nodes || !page) {
    console.error("Dados não encontrados para a Mostra:", nomeMostra);
    throw new Error(`Mostra ${nomeMostra} não encontrada`);
  }

  return {
    nodes,
    pageContent: page.content,
    infoKey: nomeMostra === "acervo" ? "informacoesMostraAcervo" : "informacoesSessao",
  };
}

export function getNomeMostraFromSlug(slug: string): Mostras {
  const nomeMostra = slugToNomeMostraMap[slug];
  if (!nomeMostra) {
    throw new Error(`Slug inválido: ${slug}`);
  }
  return nomeMostra;
}