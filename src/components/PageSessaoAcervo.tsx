import React from 'react'
import SidebarSessao from './ui/SidebarSessao'
import EmbedFilme from './ui/EmbedFilme'
import FilmesSessao from './ui/FilmesSessao'
import ConversasSessao from './ConversasSessao';

type SessaoAcervoProps = {
  mostra: string;
  sessao: {
    title: string;
    content: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
      };
    };
    informacoesMostraAcervo: {
      embed?: string;
      dataInicial?: string;
      dataFinal?: string;
      local?: string;
      filmes?: Array<{
        title: string;
        slug: string;
        featuredImage?: {
          node: {
            sourceUrl: string;
          };
        };
        informacoesAcervo: {
          fichaTecMini: string;
        };
      }>;
      conversasRelacionadas?: Array<{
        title: string;
        content: string;
        featuredImage?: {
          node: {
            sourceUrl: string;
          };
        };
        informacoesConversas: {
          data?: string;
          embed?: string;
          participantes?: string;
          local?: string;
        };
      }>;
    };
  };
};

export default function PageSessaoAcervo({ sessao, mostra }: SessaoAcervoProps) {
  return (
    <section className="pageSessao">
      <SidebarSessao
        titulo={sessao.title}
        mostra={mostra} 
        data={sessao.informacoesMostraAcervo?.dataInicial ?? ""}
        local={sessao.informacoesMostraAcervo?.local ?? ""}
        descricaoHtml={sessao.content}
      />
      <div className="pageSessao__content">
        <EmbedFilme
          embedHtml={sessao.informacoesMostraAcervo?.embed ?? ""}
          fallbackImage={sessao.featuredImage?.node.sourceUrl ?? ""}
          dataFinal={sessao.informacoesMostraAcervo?.dataFinal}
        />
        <FilmesSessao filmes={sessao.informacoesMostraAcervo?.filmes ?? []} />
        <ConversasSessao conversas={sessao.informacoesMostraAcervo?.conversasRelacionadas ?? []} />
      </div>
    </section>
  )
}
