import { urqlClient } from "./urlClient";

export default async function getTerritorio(slug: string) {
  console.log("Buscando dados do território com slug:", slug);

  const query = `
    query GetTerritorio($slug: ID!) {
      territorio(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacoesTerritorio {
          ano
          localizacao
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
          texto1
          linkTexto1
          texto2
          linkTexto2
          texto3
          linkTexto3
          texto4
          linkTexto4
          texto5
          linkTexto5
          imagem1 { sourceUrl }
          imagem2 { sourceUrl }
          imagem3 { sourceUrl }
          imagem4 { sourceUrl }
          imagem5 { sourceUrl }
          imagem6 { sourceUrl }
          imagem7 { sourceUrl }
        }
      }
    }
  `;

  const result = await urqlClient.query(query, { slug }).toPromise();

  if (result.error) {
    console.error("Erro no GraphQL:", result.error);
    throw new Error("Erro ao buscar dados do território");
  }

  return result.data.territorio;
}
