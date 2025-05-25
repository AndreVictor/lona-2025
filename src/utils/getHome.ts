import { urqlClient } from "./urlClient";

const query = `
  {
    aLona: page(id: "a-lona", idType: URI) {
      content
      informacoesLona {
        sobreMlb
        equipe
      }
    }
    atravessamentos: page(id: "mostra-atravessamentos", idType: URI) {
      content
    }
    especial: page(id: "mostra-especial", idType: URI) {
      content
    }
    homenagem: page(id: "mostra-homenagem", idType: URI) {
      content
    }
    acervo: page(id: "mostra-acervo", idType: URI) {
      content
    }
    publicacoes: page(id: "publicacoes", idType: URI) {
      content
    }
    oficinas: page(id: "oficinas", idType: URI) {
      content
    }
    podcast: page(id: "podcast", idType: URI) {
      content
    }
    cicloDeConversas: page(id: "ciclo-de-conversas", idType: URI) {
      content
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

  if (!result.data || !result.data.programacoes) {
    console.error("Erro ao buscar dados da Home", result);
    throw new Error("Erro ao buscar dados da Home");
  }

  return {
    contentALona: result.data.aLona,
    contentMostras: {
      atravessamentos: result.data.atravessamentos?.content,
      especial: result.data.especial?.content,
      homenagem: result.data.homenagem?.content,
      acervo: result.data.acervo?.content,
    },
    contentFormacao: {
      publicacoes: result.data.publicacoes?.content,
      oficinas: result.data.oficinas?.content,
      podcast: result.data.podcast?.content,
      cicloDeConversas: result.data.cicloDeConversas?.content,
    },
    programacoes: result.data.programacoes,
  };
}