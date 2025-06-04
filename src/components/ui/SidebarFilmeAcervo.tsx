"use client";
import React from "react";
import { formatDate } from "@/utils/formatDate";

type SidebarFilmeAcervoProps = {
  titulo: string;
  fichaTecMini: string;
  sinopse: string;
};

export default function SidebarFilmeAcervo({ titulo, fichaTecMini, sinopse }: SidebarFilmeAcervoProps) {
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
          {fichaTecMini}
        </p>
      </div>
      <div
        className="sidebarSessao__descricao"
        dangerouslySetInnerHTML={{ __html: sinopse }}
      />
      <nav className="sidebarSessao__nav sidebarSessao__nav--filme-acervo"> 
        <ul>
          <li><a className="biz" href="#destaque">→ Filme</a></li>
          <li><a className="biz" href="#destaque">→ Ficha Técnica Completa</a></li>
          <li><a className="biz" href="#destaque">→ Galeria de Fotos</a></li>
          <li><a className="biz" href="#destaque">→ Territórios</a></li>
          <li><a className="biz" href="#destaque">→ Conversas</a></li>
          <li><a className="biz" href="#destaque">→ Produções</a></li>
        </ul>
      </nav>
    </aside>
  );
}