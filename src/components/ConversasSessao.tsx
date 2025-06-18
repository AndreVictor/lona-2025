import React from 'react'
import HeaderSessao from './ui/HeaderSessao'
import ConversasCard from './ui/ConversasCard'

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

export default function ConversasSessao({ conversas }: { conversas: Conversa[] }) {
  return (
    <div className="pageSessao__conversas" id="conversas">
      <HeaderSessao nome="Conversas" font="biz" />
      <div className="pageSessao__conversas-box">
        {conversas.map((conversa, index) => (
            <ConversasCard key={index} conversa={conversa} />
        ))}
      </div>
    </div>
  )
}
