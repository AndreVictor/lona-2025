import { urqlClient } from "./urlClient";

const TERRITORIAIS_QUERY = `
  query {
    territoriais (first: 1000) {
      nodes {
        title
        content
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacoesTerritoriais {
          localizacao
          localizacaoPrecisa
          datainicial
          filmes {
            ... on Filme {
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              informacoesFilmes {
                fichaTecMini
              }
            }
          }
          imagem1 { sourceUrl }
          imagem2 { sourceUrl }
          imagem3 { sourceUrl }
          imagem4 { sourceUrl }
          imagem5 { sourceUrl }
          imagem6 { sourceUrl }
          imagem7 { sourceUrl }
          imagem8 { sourceUrl }
          imagem9 { sourceUrl }
          imagem10 { sourceUrl }
          parceiro1 { sourceUrl }
          parceiro2 { sourceUrl }
          parceiro3 { sourceUrl }
          parceiro4 { sourceUrl }
        }
      }
    }
    page(id: "sessoes-territoriais", idType: URI) {
      content
    }
  }
`;

export async function getTerritoriais() {
  const result = await urqlClient.query(TERRITORIAIS_QUERY, {}).toPromise();

  if (result.error) {
    console.error("Erro no GraphQL:", result.error);
    throw new Error("Erro ao buscar dados da página Territorial");
  }

  return result.data;
}