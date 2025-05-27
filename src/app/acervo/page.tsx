import { getAcervo } from "@/utils/getAcervo";
import PageAcervo from "@/components/PageAcervo";

export default async function AcervoPage() {
  const data = await getAcervo();

  const mostra = data.mostraacervos?.nodes || [];
  const acervos = data.acervos?.nodes || [];
  const territorios = data.territorios?.nodes || [];
  const pageContent = data.page?.content || "";

  return (
    <PageAcervo
      slug="acervo"
      content={pageContent}
      sessoes={mostra}
      acervos={acervos}
      territorios={territorios}
      infoKey="informacoesMostraAcervo"
    />
  );
}
