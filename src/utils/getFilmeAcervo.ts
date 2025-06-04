import { urqlClient } from "./urlClient";

export async function getFilmeAcervo(slug: string) {
  console.log("Buscando dados do filme do acervo com slug:", slug);

  const query = `
    query ($slug: ID!) {
      acervo(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        informacoesAcervo {
          fichaTecMini
          fichaTecCompleta
          embed
          cartaz {
            sourceUrl
          }
          imagem1 { sourceUrl }
          imagem2 { sourceUrl }
          imagem3 { sourceUrl }
          imagem4 { sourceUrl }
          imagem5 { sourceUrl }
          imagem6 { sourceUrl }
          imagem7 { sourceUrl }
          premiacao1
          premiacao2
          premiacao3
          premiacao4
          premiacao5
          territorio {
            ... on Territorio {
              title
              content
              featuredImage { node { sourceUrl } }
              informacoesTerritorio {
                localizacao
              }
            }
          }
          nossaLutaNossoAcervoEmbed1
          nossaLutaNossoAcervoEmbed2
          nossaLutaNossoAcervoTexto1
          nossaLutaNossoAcervoTexto2
          nossaLutaNossoAcervoTituloEmbed1
          nossaLutaNossoAcervoTituloEmbed2
        }
      }
    }
  `;

  const result = await urqlClient.query(query, { slug }).toPromise();

  if (result.error) {
    console.error("Erro no GraphQL:", result.error);
    throw new Error("Erro ao buscar dados do filme do acervo");
  }

  return result.data.acervo;
}
