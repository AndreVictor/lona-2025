import { urqlClient } from "./urlClient";

export async function getAcervo() {
  const query = `
    query {
      mostraacervos {
        nodes {
          title
          content
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          informacoesMostraAcervo {
            dataInicial
            local
            filmes {
              ... on Acervo {
                title
                slug
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                informacoesAcervo {
                  fichaTecMini
                }
              }
            }
          }
        }
      }
      acervos(first: 1000, where: { orderby: { field: TITLE, order: ASC } }) {
        nodes {
          title
          content
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          informacoesAcervo {
            fichaTecMini
            territorio {
              ... on Territorio {
                title
              }
            }
          }
        }
      }
      territorios {
        nodes {
          title
          content
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          informacoesTerritorio {
            localizacao
          }
        }
      }
      page(id: "mostra-acervo", idType: URI) {
        content
      }
    }
  `;

  const result = await urqlClient.query(query, {}).toPromise();

  if (result.error) {
    console.error("Erro no GraphQL:", result.error);
    throw new Error("Erro ao buscar dados da página Acervo");
  }

  return result.data;
}
