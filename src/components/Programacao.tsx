'use client';

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
      sessoesTerritoriais?: { title: string; slug: string; informacoesTerritoriais?: { localizacaoPrecisa?: string } }[] | null;
      podcast?: { title: string; slug: string; informacoesPodcast?: { participantes?: string } }[] | null;
      oficina?: { title: string; slug: string; informacoesOficinas?: { ministrante?: string } }[] | null;
      publicacao?: { title: string; slug: string; informacoesPublicacoes?: { autoras?: string } }[] | null;
      cicloDeConversa?: { title: string; slug: string; informacoesConversas?: { participantes?: string } }[] | null;
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
  const categoria = item.informacoesProgramacao.categoria?.toLowerCase().replace(/\s+/g, '-');
  const slug = item.slug;

  if (!categoria) return '#';

  if (categoria.includes('sessões-territoriais')) {
    const territorial = item.informacoesProgramacao.sessoesTerritoriais?.[0];
    return territorial ? `/territoriais#${territorial.slug}` : '#';
  }

  if (categoria.includes('podcast')) {
    const podcast = item.informacoesProgramacao.podcast?.[0];
    return podcast ? `/formacao/podcast#${podcast.slug}` : '#';
  }

  if (categoria.includes('oficinas')) {
    const oficina = item.informacoesProgramacao.oficina?.[0];
    return oficina ? `/formacao/oficinas#${oficina.slug}` : '#';
  }

  if (categoria.includes('publicacoes')) {
    const pub = item.informacoesProgramacao.publicacao?.[0];
    return pub ? `/formacao/publicacoes#${pub.slug}` : '#';
  }

  if (categoria.includes('ciclo-de-conversas') || categoria.includes('ciclo-de-conversa')) {
    const conversa = item.informacoesProgramacao.cicloDeConversa?.[0];
    return conversa ? `/formacao/ciclo-de-conversas#${conversa.slug}` : '#';
  }

  if (
    ['homenagem', 'atravessamentos', 'especial', 'acervo', 'abertura', 'encerramento'].includes(
      categoria
    )
  ) {
    const sessao = item.informacoesProgramacao.sessoes?.[0];
    if (!sessao) return '#';
    return categoria === 'acervo'
      ? `/acervo/sessao/${sessao.slug}`
      : `/mostra/${categoria}/${sessao.slug}`;
  }

  return '#';
}

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const programacoesFuturas = programacoes
    .filter((item) => {
      const data = item.informacoesProgramacao.dataHora;
      const [dataPart] = data.split(' ');
      const [dia, mes, ano] = dataPart.split('/');

      const dataItem = new Date(Number(ano), Number(mes) - 1, Number(dia), 0, 0, 0, 0);

      return dataItem >= hoje;
    })
    .sort((a, b) => {
      const [dataA] = a.informacoesProgramacao.dataHora.split(' ');
      const [diaA, mesA, anoA] = dataA.split('/');
      const dateA = new Date(Number(anoA), Number(mesA) - 1, Number(diaA));

      const [dataB] = b.informacoesProgramacao.dataHora.split(' ');
      const [diaB, mesB, anoB] = dataB.split('/');
      const dateB = new Date(Number(anoB), Number(mesB) - 1, Number(diaB));

      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, 8);

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
        {programacoesFuturas.map((item) => {
          const filmes = (
            item.informacoesProgramacao.sessoesTerritoriais?.map(
              (t) => t.title
            ) ??
            item.informacoesProgramacao.cicloDeConversa?.map(
              (c) => c.title
            ) ??
            item.informacoesProgramacao.podcast?.map(
              (p) => p.title
            ) ??
            item.informacoesProgramacao.oficina?.map(
              (o) => o.title
            ) ??
            item.informacoesProgramacao.publicacao?.map(
              (p) => p.title
            ) ??
            item.informacoesProgramacao.sessoes?.flatMap((sessao) => {
              const filmesAcervo =
                sessao.informacoesMostraAcervo?.filmes?.map((f) => f.title) || [];
              const filmesGerais =
                sessao.informacoesSessao?.filmes?.map((f) => f.title) || [];
              return [...filmesAcervo, ...filmesGerais];
            }) ??
            []
          ).filter((f): f is string => Boolean(f));

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