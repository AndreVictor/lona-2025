"use client";
import React, { useState } from "react";

export default function MenuFiltrosMostra() {
  const [filtro, setFiltro] = useState("sessoes");

  return (
    <div className="menuFiltrosMostra">
      <button
        onClick={() => setFiltro("sessoes")}
        className={filtro === "sessoes" ? "ativo" : ""}
      >
        Sessões
      </button>
      <button
        onClick={() => setFiltro("filmes")}
        className={filtro === "filmes" ? "ativo" : ""}
      >
        Filmes
      </button>
      <button
        onClick={() => setFiltro("anteriores")}
        className={filtro === "anteriores" ? "ativo" : ""}
      >
        Edições Anteriores
      </button>
    </div>
  );
}