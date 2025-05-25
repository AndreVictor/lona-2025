"use client";
import React from "react";

type SidebarFormacaoProps = {
  titulo: string;
  descricao: string;
  anchorLinks: string[];
};

export default function SidebarFormacao({ titulo, descricao, anchorLinks }: SidebarFormacaoProps) {
  return (
    <aside className="sidebarFormacao">
      <h1 className="sidebarFormacao__title archivo uppercase condensed">
        {titulo}
      </h1>
      <p className="sidebarFormacao__descricao">
        {descricao}
      </p>
      <nav className="sidebarFormacao__nav">
        <ul>
          {anchorLinks.map((link, index) => (
            <li key={index}><a className="biz" href="#destaque">→ {link}</a></li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}