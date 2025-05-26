"use client";
import React from "react";

type MenuFiltrosMostraProps = {
  filtro: string;
  setFiltro: (value: string) => void;
  datas: string[];
  locais: string[];
  datasSelecionadas: string[];
  setDatasSelecionadas: (value: string[]) => void;
  locaisSelecionados: string[];
  setLocaisSelecionados: (value: string[]) => void;
};

export default function MenuFiltrosMostra({ filtro, setFiltro, datas, locais, datasSelecionadas, setDatasSelecionadas, locaisSelecionados, setLocaisSelecionados }: MenuFiltrosMostraProps) {
  const [dropdownDatasOpen, setDropdownDatasOpen] = React.useState(false);
  const [dropdownLocaisOpen, setDropdownLocaisOpen] = React.useState(false);

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
                onChange={() => toggleSelecaoUnica(
                  data,
                  datasSelecionadas,
                  setDatasSelecionadas,
                  setDropdownDatasOpen
                )}
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
                onChange={() => toggleSelecaoUnica(
                  local,
                  locaisSelecionados,
                  setLocaisSelecionados,
                  setDropdownLocaisOpen
                )}
              />
              {local}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}