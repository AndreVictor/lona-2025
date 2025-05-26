import PageMostras from "@/components/PageMostras";
import { getMostra } from "@/utils/getMostra";

const slugsValidos = ["atravessamentos", "acervo", "homenagem", "especial"] as const;
type Mostras = (typeof slugsValidos)[number];

export default async function Page({ params }: { params: { slug: string } }) {
  if (!slugsValidos.includes(params.slug as Mostras)) {
    return <div>Mostra não encontrada</div>;
  }

  const data = await getMostra(params.slug as Mostras);

  if (!data || !data.nodes) {
    return <div>Erro ao carregar os dados da mostra.</div>;
  }

  return (
    <PageMostras
      slug={params.slug}
      content={data.pageContent}
      sessoes={data.nodes}
    />
  );
}

export async function generateStaticParams() {
  return [
    { slug: "atravessamentos" },
    { slug: "acervo" },
    { slug: "homenagem" },
    { slug: "especial" },
  ];
}