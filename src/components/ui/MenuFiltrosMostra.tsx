"use client";
import React, { useState } from "react";

export default function MenuFiltrosMostra() {
  const [filtro, setFiltro] = useState("sessoes");
  const [datasSelecionadas, setDatasSelecionadas] = useState<string[]>([]);
  const [locaisSelecionados, setLocaisSelecionados] = useState<string[]>([]);

  const [dropdownDatasOpen, setDropdownDatasOpen] = useState(false);
  const [dropdownLocaisOpen, setDropdownLocaisOpen] = useState(false);

  const datas = ["08 maio", "09 maio", "10 maio", "11 maio", "12 maio", "13 maio"];
  const locais = ["Ocupação Maria do Arraial", "Cine Santa Tereza"];

  const toggleSelecaoUnica = (
    item: string,
    lista: string[],
    setLista: (value: string[]) => void,
    setDropdownOpen: (value: boolean) => void
  ) => {
    if (lista.includes(item)) {
      setLista([]);
    } else {
      setLista([item]);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="menuFiltrosMostra biz">
      <div className="switch">
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
      </div>

      <div className="dropdown">
        <button className={`dropdown-toggle ${datasSelecionadas.length > 0 ? "ativo" : ""}`} onClick={() => setDropdownDatasOpen(!dropdownDatasOpen)}>
          <>
            {datasSelecionadas[0] || "Datas"}{" "}
            <span className={`seta ${dropdownDatasOpen ? "aberto" : ""}`}>→</span>
          </>
        </button>
        <div className={`dropdown-menu ${dropdownDatasOpen ? "show" : ""}`}>
          {datas.map(data => (
            <label key={data}>
              <input
                type="checkbox"
                checked={datasSelecionadas.includes(data)}
                onChange={() => toggleSelecaoUnica(data, datasSelecionadas, setDatasSelecionadas, setDropdownDatasOpen)}
              />
              {data}
            </label>
          ))}
        </div>
      </div>

      <div className="dropdown">
        <button className={`dropdown-toggle ${locaisSelecionados.length > 0 ? "ativo" : ""}`} onClick={() => setDropdownLocaisOpen(!dropdownLocaisOpen)}>
          <>
            {locaisSelecionados[0] || "Locais"}{" "}
            <span className={`seta ${dropdownLocaisOpen ? "aberto" : ""}`}>→</span>
          </>
        </button>
        <div className={`dropdown-menu ${dropdownLocaisOpen ? "show" : ""}`}>
          {locais.map(local => (
            <label key={local}>
              <input
                type="checkbox"
                checked={locaisSelecionados.includes(local)}
                onChange={() => toggleSelecaoUnica(local, locaisSelecionados, setLocaisSelecionados, setDropdownLocaisOpen)}
              />
              {local}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}