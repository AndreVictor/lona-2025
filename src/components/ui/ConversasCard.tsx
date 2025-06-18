import React from 'react'
import { formatDate } from '../../utils/formatDate';

type Conversa = {
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
};

export default function ConversasCard({ conversa }: { conversa: Conversa }) {
  return (
    <div className="pageSessao__conversas-card">
      <div className="pageSessao__conversas-embed" dangerouslySetInnerHTML={{ __html: conversa.informacoesConversas?.embed ?? '' }} />
      <div className="pageSessao__conversas-card-box">
        <div className="pageSessao__conversas-col1">
        <h3 className="pageSessao__conversas-title archivo condensed uppercase">
          {conversa.title}
        </h3>
        <div className="pageSessao__conversas-info biz uppercase">
          {formatDate(conversa.informacoesConversas?.data ?? '')} <br/> {conversa.informacoesConversas?.local} <br/> {conversa.informacoesConversas?.participantes}
        </div>
      </div>
      <div className="pageSessao__conversas-col2" dangerouslySetInnerHTML={{ __html: conversa.content }} />
      </div>
    </div>
  )
}
