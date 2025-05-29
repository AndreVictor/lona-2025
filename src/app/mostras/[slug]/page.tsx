import PageMostras from "@/components/PageMostras";
import { getMostra } from "@/utils/getMostra";
import { notFound } from "next/navigation";

const slugsValidos = ["atravessamentos", "homenagem", "especial"] as const;
type Mostras = (typeof slugsValidos)[number];

function isMostras(slug: string): slug is Mostras {
  return slugsValidos.includes(slug as Mostras);
}

export default async function MostraPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  if (!isMostras(slug)) {
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