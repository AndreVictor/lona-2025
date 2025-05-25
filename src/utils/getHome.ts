import { urqlClient } from "./urlClient";

const query = `
  {
  page(id: "a-lona", idType: URI) {
    content
    informacoesLona {
      sobreMlb
      equipe
    }
  }
  programacoes(where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      title
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      informacoesProgramacao {
        dataHora
        local
        categoria
        sessoesTerritoriais {
          ... on Territorial {
            title
            slug
          }
        }
        podcast {
          ... on Podcast {
            title
            slug
          }
        }
        oficina {
          ... on Oficina {
            title
            slug
          }
        }
        publicacao {
          ... on Publicacao {
            title
            slug
          }
        }
        cicloDeConversa {
          ... on Conversa {
            title
            slug
          }
        }
        sessoes {
          ... on Abertura {
            title
            slug
            informacoesSessao {
              filmes {
                ... on Filme {
                  title
                }
              }
            }
          }
          ... on Mostraacervo {
            title
            slug
            informacoesMostraAcervo {
              filmes {
                ... on Acervo {
                  title
                }
              }
            }
          }
          ... on Homenagem {
            title
            slug
            informacoesSessao {
              filmes {
                ... on Filme {
                  title
                }
              }
            }
          }
          ... on Atravessamento {
            title
            slug
            informacoesSessao {
              filmes {
                ... on Filme {
                  title
                }
              }
            }
          }
          ... on Especial {
            title
            slug
            informacoesSessao {
              filmes {
                ... on Filme {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export async function getHome() {
  const result = await urqlClient.query(query, {}).toPromise();
  
  if (result.error) {
    console.error("Erro no GraphQL:", result.error);
    throw new Error("Erro ao buscar dados da página A Lona");
  }

  if (!result.data) {
    console.warn("Dados não encontrados para a página A Lona");
    return null;
  }

  console.log(result.data)
  return result.data;
}