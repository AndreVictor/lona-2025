import PageSessao from '@/components/PageSessao';
import { getSessao } from '@/utils/getSessao';
import type { Mostras } from '@/utils/getSessao'; // 👈 Importa o tipo corretamente

type Props = {
  params: {
    slug: string;
    sessaoSlug: string;
  };
};

export default async function SessaoPage({ params }: Props) {
  const { slug, sessaoSlug } = params;
  const sessaoData = await getSessao(sessaoSlug, slug as Mostras);

  if (!sessaoData) {
    return <div>Erro ao carregar os dados da sessão.</div>;
  }

  return <PageSessao sessao={sessaoData} mostra={slug} />;
}