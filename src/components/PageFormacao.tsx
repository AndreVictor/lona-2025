"use client";

import SidebarFormacao from "./SidebarFormacao";
import ListaFormacao from "./ui/ListaFormacao";

type PageFormacaoProps = {
  titulo: string;
  descricao: string;
  anchorLinks: string[];
};

export default function PageFormacao({ titulo, descricao, anchorLinks }: PageFormacaoProps) {
  return (
    <div className="formacao">
      <SidebarFormacao 
        titulo={titulo}
        descricao={descricao}
        anchorLinks={anchorLinks}
      />
      <div className="formacao__content">
        {/* <ListaFormacao /> */}
      </div>
    </div>
  );
}