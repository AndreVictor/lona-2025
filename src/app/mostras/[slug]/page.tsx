import PageMostras from "@/components/PageMostras";

export default function Page() {
  return <PageMostras />;
}

export async function generateStaticParams() {
  return [
    { slug: "atravessamentos" },
    { slug: "acervo" },
    { slug: "homenagem" },
    { slug: "especial" },
  ];
}