import { use } from "react";
import PageSessao from '@/components/PageSessao';
import { getSessao } from '@/utils/getSessao';
import type { Mostras } from '@/utils/getSessao'; // 👈 Importa o tipo corretamente

export default async function SessaoPage({ params }: { params: Promise<{ slug: string; sessaoSlug: string }> }) {
  const { slug, sessaoSlug } = await params;

  const sessaoData = await getSessao(sessaoSlug, "acervo");

  if (!sessaoData) {
    return <div>Erro ao carregar os dados da sessão.</div>;
  }

  return <PageSessao sessao={sessaoData} mostra={slug} />;
}