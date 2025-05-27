import PageMostras from "@/components/PageMostras";
import { getMostra } from "@/utils/getMostra";

const slugsValidos = ["atravessamentos", "homenagem", "especial"] as const;
type Mostras = (typeof slugsValidos)[number];

interface Params {
  params: {
    slug: string;
  };
}

export default async function MostraPage({ params }: Params) {
  const slug = params.slug as Mostras;

  if (!slugsValidos.includes(slug)) {
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