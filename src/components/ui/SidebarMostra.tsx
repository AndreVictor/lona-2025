"use client";
import React from "react";

type SidebarMostraProps = {
  mostra: string;
  descricao: string;
};

export default function SidebarMostra({ mostra, descricao }: SidebarMostraProps) {
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
      <p className="sidebarMostra__descricao">
        {descricao}
      </p>
      <nav className="sidebarMostra__nav">
        <ul>
          <li><a className="biz" href="#destaque">→ Próxima exibição</a></li>
          <li><a className="biz" href="#sessões">→ Sessões</a></li>
          <li><a className="biz" href="#filmes">→ Filmes</a></li>
          <li><a className="biz" href="#anteriores">→ Edições anteriores</a></li>
        </ul>
      </nav>
    </aside>
  );
}