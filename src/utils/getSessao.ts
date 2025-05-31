import { urqlClient } from './urlClient';

export type Mostras = "atravessamentos" | "homenagem" | "especial";

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
};

export async function getSessao(slug: string, nomeMostra: string) {
  if (!['atravessamentos', 'homenagem', 'especial'].includes(nomeMostra)) {
    console.error('Mostra inválida:', nomeMostra);
    return null;
  }

  const mostraKey = nomeMostra as Mostras;
  const query = queries[mostraKey];
  const res = await urqlClient.query(query, { slug }).toPromise();

  const dataKey = mostraKey.slice(0, -1); // transforma "atravessamentos" em "atravessamento", etc.
  const data = res.data?.[dataKey];

  if (res.error || !data) {
    console.error('Erro ao buscar dados da sessão:', res.error);
    return null;
  }

  return data;
}
