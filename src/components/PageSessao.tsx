import React from 'react'
import SidebarSessao from './ui/SidebarSessao'
import EmbedFilme from './ui/EmbedFilme'
import FilmesSessao from './ui/FilmesSessao'

type SessaoProps = {
  mostra: string;
  sessao: {
    title: string;
    content: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
      };
    };
    informacoesSessao: {
      embed?: string;
      dataInicial?: string;
      local?: string;
      filmes?: Array<{
        title: string;
        slug: string;
        featuredImage?: {
          node: {
            sourceUrl: string;
          };
        };
        informacoesFilmes: {
          fichaTecMini: string;
        };
      }>;
    };
  };
};

export default function PageSessao({ sessao, mostra }: SessaoProps) {
  return (
    <section className="pageSessao">
      <SidebarSessao
        titulo={sessao.title}
        mostra={mostra} 
        data={sessao.informacoesSessao?.dataInicial ?? ""}
        local={sessao.informacoesSessao?.local ?? ""}
        descricaoHtml={sessao.content}
      />
      <div className="pageSessao__content">
        <EmbedFilme
          embedUrl={sessao.informacoesSessao?.embed ?? ""}
          fallbackImage={sessao.featuredImage?.node.sourceUrl ?? ""}
        />
        <FilmesSessao filmes={sessao.informacoesSessao?.filmes ?? []} />
      </div>
    </section>
  )
}
