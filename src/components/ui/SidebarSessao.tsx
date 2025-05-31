"use client";
import React from "react";

type SideBarSessaoProps = {
  titulo: string;
  mostra: string;
  data: string;
  local: string;
  descricaoHtml: string;
};

export default function SidebarSessao({ titulo, mostra, data, local, descricaoHtml }: SideBarSessaoProps) {
  return (
    <aside className="sidebarSessao">
      <h6 className="sidebarSessao__mostra biz">
        {mostra}
      </h6>
      <h1 className="sidebarSessao__title archivo uppercase condensed">
        {titulo}
      </h1>
      <div className="sidebarSessao__info biz">
        <p className="sidebarSessao__data">
          {data}
        </p>
        <p className="sidebarSessao__local">
          {local}
        </p>
      </div>
      <div
        className="sidebarSessao__descricao"
        dangerouslySetInnerHTML={{ __html: descricaoHtml }}
      />
      <nav className="sidebarSessao__nav">
        <ul>
          <li><a className="biz" href="#destaque">→ Filmes</a></li>
          <li><a className="biz" href="#destaque">→ Conversas</a></li>
        </ul>
      </nav>
    </aside>
  );
}