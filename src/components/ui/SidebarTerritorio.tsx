"use client";
import React from "react";

export default function SidebarTerritorio({ territorio }: { territorio: any }) {
  const titulo = territorio.title;
  const localizacao = territorio.informacoesTerritorio?.localizacao;
  const ano = territorio.informacoesTerritorio?.ano;
  const sinopse = territorio.content;

  return (
    <aside className="sidebarSessao">
      <h6 className="sidebarSessao__mostra biz">
        Acervo
      </h6>
      <h1 className="sidebarSessao__title archivo uppercase condensed">
        {titulo}
      </h1>
      <div className="sidebarSessao__info biz">
        <p className="sidebarSessao__local">
          {ano}
        </p>
        <p className="sidebarSessao__local">
          {localizacao}
        </p>
      </div>
      <div
        className="sidebarSessao__descricao"
        dangerouslySetInnerHTML={{ __html: sinopse }}
      />
      <nav className="sidebarSessao__nav sidebarSessao__nav--filme-acervo"> 
        <ul>
          <li><a className="biz" href="#galeria">→ Galeria</a></li>
          <li><a className="biz" href="#filmes">→ Filmes</a></li>
          <li><a className="biz" href="#textos">→ Textos</a></li>
        </ul>
      </nav>
    </aside>
  );
}
