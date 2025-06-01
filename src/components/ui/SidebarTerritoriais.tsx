"use client";
import React from "react";

type SidebarTerritoriaisProps = {
  titulo: string;
  descricao: string;
  anchorLinks: { title: string; slug: string }[];
};

export default function SidebarTerritoriais({ titulo, descricao, anchorLinks }: SidebarTerritoriaisProps) {
  return (
    <aside className="sidebarFormacao">
      <h1 className="sidebarFormacao__title archivo uppercase condensed">
        {titulo}
      </h1>
      <div 
        className="sidebarFormacao__descricao territoriais__sidebar-descricao"
        dangerouslySetInnerHTML={{__html: descricao}}
      >
      </div>
      <nav className="sidebarFormacao__nav territoriais__sidebar-nav">
        <ul>
          {anchorLinks.map((link, index) => (
            <li key={index}><a className="biz" href={`#${link.slug}`}>→ {link.title}</a></li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}