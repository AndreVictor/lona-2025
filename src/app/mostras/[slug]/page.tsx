import PageMostras from "@/components/PageMostras";
import { getMostra } from "@/utils/getMostra";

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getMostra(params.slug, params.slug);

  if (!data) {
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