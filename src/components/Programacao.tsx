'use client';

import Link from 'next/link';
import CardProg from './ui/CardProg';
import HeaderSessao from './ui/HeaderSessao';

type ProgramacaoProps = {
  programacoes: {
    title: string;
    slug: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
      };
    };
    informacoesProgramacao: {
      dataHora: string;
      local: string;
      categoria: string;
      sessoesTerritoriais?: { title: string; slug: string }[] | null;
      podcast?: { title: string; slug: string }[] | null;
      oficina?: { title: string; slug: string }[] | null;
      publicacao?: { title: string; slug: string }[] | null;
      cicloDeConversa?: { title: string; slug: string }[] | null;
      sessoes?: {
        title: string;
        slug: string;
        informacoesMostraAcervo?: {
          filmes: { title: string; informacoesAcervo?: { fichaTecMini?: string | null } | null }[];
        } | null;
        informacoesSessao?: {
          filmes: { title: string; informacoesFilmes?: { fichaTecMini?: string | null } | null }[];
        } | null;
      }[] | null;
    };
  }[];
};

export default function Programacao({ programacoes }: ProgramacaoProps) {
  const handlePrev = () => {
    const container = document.querySelector('.home__programacao-card-box');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const handleNext = () => {
    const container = document.querySelector('.home__programacao-card-box');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  function gerarLink(item: any) {
    const categoria = item.informacoesProgramacao.categoria.toLowerCase().replace(/\s+/g, '-');

    if (categoria === 'sessoes-territoriais') {
      const sessao = item.informacoesProgramacao.sessoesTerritoriais?.[0];
      if (sessao) {
        return `/sessao-territorial/${sessao.slug}`;
      }
    }

    if (['homenagem', 'atravessamentos', 'especial', 'acervo', 'abertura'].includes(categoria)) {
      const sessao = item.informacoesProgramacao.sessoes?.[0];
      if (sessao) {
        return `/mostra/${categoria}/${sessao.slug}`;
      }
    }

    if (['publicacoes', 'oficinas', 'ciclo-de-conversas', 'podcast'].includes(categoria)) {
      const formacao =
        item.informacoesProgramacao.podcast?.[0] ||
        item.informacoesProgramacao.oficina?.[0] ||
        item.informacoesProgramacao.publicacao?.[0] ||
        item.informacoesProgramacao.cicloDeConversa?.[0];

      if (formacao) {
        return `/formacao/${categoria}#${formacao.slug}`;
      }
    }

    return '#';
  }

  return (
    <section id="programacao" className="home__programacao">
      <HeaderSessao
        nome="Programação"
        font="archivo"
        comArrows
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <div className="home__programacao-card-box">
        {programacoes.map((item) => {
          const filmes = item.informacoesProgramacao.sessoes?.flatMap((sessao) => {
            const filmesAcervo = sessao.informacoesMostraAcervo?.filmes?.map(f => f.title) || [];
            const filmesGerais = sessao.informacoesSessao?.filmes?.map(f => f.title) || [];
            return [...filmesAcervo, ...filmesGerais];
          }) || ['Filme não identificado'];

          return (
            <CardProg
              key={item.slug}
              classCategoria={item.informacoesProgramacao.categoria}
              categoria={item.title}
              filmes={filmes}
              data={item.informacoesProgramacao.dataHora}
              local={item.informacoesProgramacao.local}
              imagem={item.featuredImage?.node.sourceUrl || ''}
              link={gerarLink(item)}
            />
          );
        })}
      </div>
    </section>
  );
}