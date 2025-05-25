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
pages(where: {slugIn: ["mostra-atravessamentos", "mostra-especial", "mostra-homenagem", "mostra-acervo"]}) {
  nodes {
    slug
    content
  }
}
  programacoes(where: {orderby: {field: DATE, order: ASC}}, first: 1000) {
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

  return {
    contentALona: result.data.page,
    contentMostras: {
      atravessamentos: result.data['page(id: "mostra-atravessamentos", idType: URI)']?.content,
      especial: result.data['page(id: "mostra-especial", idType: URI)']?.content,
      homenagem: result.data['page(id: "mostra-homenagem", idType: URI)']?.content,
      acervo: result.data['page(id: "mostra-acervo", idType: URI)']?.content,
    },
    programacoes: result.data.programacoes,
  };
}