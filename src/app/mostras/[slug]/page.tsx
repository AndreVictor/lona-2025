import PageMostras from "@/components/PageMostras";
import { getMostra, getNomeMostraFromSlug } from "@/utils/getMostra";

const slugsValidos = ["atravessamentos", "homenagem", "especial"] as const;
type Mostras = (typeof slugsValidos)[number];

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  let slug: Mostras;

  try {
    slug = getNomeMostraFromSlug(params.slug);
  } catch (error) {
    return <div>Mostra não encontrada</div>;
  }

  const data = await getMostra(slug);

  if (!data || !data.nodes) {
    return <div>Erro ao carregar os dados da mostra.</div>;
  }

  return (
    <PageMostras
      slug={slug}
      content={data.pageContent}
      sessoes={data.nodes}
      infoKey={data.infoKey}
    />
  );
}

export async function generateStaticParams() {
  return slugsValidos.map((slug) => ({ slug }));
}