import { urqlClient } from "./urlClient";

const query = `
  query {
    page(id: "a-lona", idType: URI) {
      content
      informacoesLona {
        sobreMlb
      }
    }
  }
`;

export async function getALona() {
  const result = await urqlClient.query(query, {}).toPromise();
  
  if (result.error) {
    console.error("Erro no GraphQL:", result.error);
    throw new Error("Erro ao buscar dados da página A Lona");
  }

  if (!result.data?.page) {
    console.warn("Dados não encontrados para a página A Lona");
    return null;
  }

  return result.data.page;
}