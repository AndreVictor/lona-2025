import PageMostras from "@/components/PageMostras";
import { getMostra } from "@/utils/getMostra";
import { notFound } from "next/navigation";
import { use } from "react";

const slugsValidos = ["atravessamentos", "homenagem", "especial"] as const;
type Mostras = (typeof slugsValidos)[number];

function isMostras(slug: string): slug is Mostras {
  return slugsValidos.includes(slug as Mostras);
}

export default function MostraPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  if (!isMostras(slug)) {
    notFound();
  }

  const data = use(getMostra(slug));

  if (!data || !data.nodes) {
    return <div>Erro ao carregar os dados da mostra.</div>;
  }

  return (
    <PageMostras
      slug={slug}
      content={data.pageContent}
      sessoes={data.nodes}
      infoKey={data.infoKey}
      anteriores={data.anteriores}
    />
  );
}

export async function generateStaticParams(): Promise<Array<{ slug: Mostras }>> {
  return slugsValidos.map((slug) => ({ slug }));
}