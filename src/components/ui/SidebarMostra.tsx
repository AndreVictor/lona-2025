"use client";
import React from "react";

type SidebarMostraProps = {
  mostra: string;
  content: string;
};

export default function SidebarMostra({ mostra, content }: SidebarMostraProps) {
  return (
    <aside className="sidebarMostra">
      {mostra === 'mostra atravessamentos' ? (
        <h1 className="sidebarMostra__title archivo uppercase condensed">
          mostra atravess<br />
          <span className="sidebarMostra__title--right">amentos</span>
        </h1>
      ) : (
        <h1 className="sidebarMostra__title archivo uppercase condensed">
          {mostra}
        </h1>
      )}
      <div 
        className="sidebarMostra__descricao"
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </div>
      <nav className="sidebarMostra__nav">
        <ul>
          <li><a className="biz" href="#destaque">→ Próxima exibição</a></li>
          <li><a className="biz" href="#sessoes">→ Sessões</a></li>
          <li><a className="biz" href="#filmes">→ Filmes</a></li>
          <li><a className="biz" href="#anteriores">→ Edições anteriores</a></li>
        </ul>
      </nav>
    </aside>
  );
}