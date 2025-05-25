"use client";

import { useState } from "react";
import DestaqueSlider from "@/components/ui/DestaqueSlider";
import ListaFilmes from "@/components/ui/ListaFilmes";
import ListaSessao from "@/components/ui/ListaSessao";
import MenuFiltrosMostra from "@/components/ui/MenuFiltrosMostra";
import SidebarMostra from "@/components/ui/SidebarMostra";

export default function PageMostras() {
  const [filtro, setFiltro] = useState("sessoes");

  return (
    <div className="mostra">
      <div className="mostra__sidebar">
        <SidebarMostra
          mostra="mostra atravessamentos"
          descricao="Descrição da mostra atravessamentos..."
        />
      </div>
      <div className="mostra__content">
        <DestaqueSlider />
        <MenuFiltrosMostra filtro={filtro} setFiltro={setFiltro} />
        {filtro === "filmes" ? <ListaFilmes /> : <ListaSessao />}
      </div>
    </div>
  );
}