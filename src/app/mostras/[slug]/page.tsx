import PageMostras from "@/components/PageMostras";
import { getMostra } from "@/utils/getMostra";
import { notFound } from "next/navigation";

const slugsValidos = ["atravessamentos", "homenagem", "especial"] as const;
type Mostras = (typeof slugsValidos)[number];

interface Props {
  params: {
    slug: Mostras;
  };
}
// teste
export default async function MostraPage({ params }: Props) {
  const slug = params.slug;

  if (!slugsValidos.includes(slug)) {
    notFound();
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

export async function generateStaticParams(): Promise<Array<{ slug: Mostras }>> {
  return slugsValidos.map((slug) => ({ slug }));
}