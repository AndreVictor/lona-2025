import { urqlClient } from './urlClient';

export type Mostras = "atravessamentos" | "homenagem" | "especial" | "acervo";

const queries: Record<Mostras, string> = {
  atravessamentos: `
    query ($slug: ID!) {
      atravessamento(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacoesSessao {
          embed
          dataInicial
          dataFinal
          local
          filmes {
            ... on Filme {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesFilmes {
                fichaTecMini
                fichaTecCompleta
              }
            }
          }
          conversaRelacionada {
            ... on Conversa {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesConversas {
                data
                embed
                participantes
                local
              }
            }
          }
        }
      }
    }
  `,
  homenagem: `
    query ($slug: ID!) {
      homenagem(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacoesSessao {
          embed
          dataInicial
          dataFinal
          local
          filmes {
            ... on Filme {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesFilmes {
                fichaTecMini
                fichaTecCompleta
              }
            }
          }
          conversaRelacionada {
            ... on Conversa {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesConversas {
                data
                embed
                participantes
                local
              }
            }
          }
        }
      }
    }
  `,
  especial: `
    query ($slug: ID!) {
      especial(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacoesSessao {
          embed
          dataInicial
          dataFinal
          local
          filmes {
            ... on Filme {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesFilmes {
                fichaTecMini
                fichaTecCompleta
              }
            }
          }
          conversaRelacionada {
            ... on Conversa {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesConversas {
                data
                embed
                participantes
                local
              }
            }
          }
        }
      }
    }
  `,
  acervo: `
    query ($slug: ID!) {
      mostraacervo(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacoesMostraAcervo {
          embed
          dataInicial
          dataFinal
          local
          filmes {
            ... on Acervo {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesAcervo {
                fichaTecMini
                fichaTecCompleta
              }
            }
          }
          conversasRelacionadas {
            ... on Conversa {
              title
              content
              featuredImage {node {sourceUrl}}
              informacoesConversas {
                data
                embed
                participantes
                local
              }
            }
          }
        }
      }
    }
  `,
};

export async function getSessao(slug: string, nomeMostra: string) {
  if (!['atravessamentos', 'homenagem', 'especial', 'acervo'].includes(nomeMostra)) {
    console.error('Mostra inválida:', nomeMostra);
    return null;
  }

  const mostraKey = nomeMostra as Mostras;
  const query = queries[mostraKey];
  // Log antes da query
  console.log('Buscando dados da sessão com slug:', slug, 'e mostra:', nomeMostra);
  const res = await urqlClient.query(query, { slug }).toPromise();
  // Log após a query
  console.log('Resposta bruta da query:', res);

  const dataKeyMap: Record<Mostras, string> = {
    atravessamentos: 'atravessamento',
    homenagem: 'homenagem',
    especial: 'especial',
    acervo: 'mostraacervo',
  };

  const dataKey = dataKeyMap[mostraKey];
  
  const data = res.data?.[dataKey];

  if (res.error || !data) {
    console.error('Erro ao buscar dados da sessão:', res.error);
    
    return null;
  }

  console.log('Dados recebidos da query:', data);
  return data;
}
