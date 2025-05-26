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
          descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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