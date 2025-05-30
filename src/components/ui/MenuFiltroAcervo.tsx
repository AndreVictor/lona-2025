"use client";
import React from "react";

type MenuFiltroAcervoProps = {
  territorios: string[];
  territoriosSelecionados: string[];
  setTerritoriosSelecionados: (value: string[]) => void;
};

export default function MenuFiltroAcervo({
  territorios,
  territoriosSelecionados,
  setTerritoriosSelecionados,
}: MenuFiltroAcervoProps) {
  const [dropdownTerritoriosOpen, setDropdownTerritoriosOpen] = React.useState(false);

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
    <div className="menuFiltrosMostra menuFiltrosMostra--territorio biz">
      <div className="dropdown menuFiltrosMostra__dropdown-territorio">
        <button className={`dropdown-toggle menuFilstrosMostra__toggle-territorio ${territoriosSelecionados.length > 0 ? "ativo" : ""}`} onClick={() => setDropdownTerritoriosOpen(!dropdownTerritoriosOpen)}>
          <>
            {territoriosSelecionados[0] || "Territórios"}{" "}
            <span className={`seta ${dropdownTerritoriosOpen ? "aberto" : ""}`}>→</span>
          </>
        </button>
        <div className={`dropdown-menu menuFiltrosMostra__menu-territorio ${dropdownTerritoriosOpen ? "show" : ""}`}>
          {territorios.map(territorio => (
            <label key={territorio}>
              <input
                type="checkbox"
                checked={territoriosSelecionados.includes(territorio)}
                onChange={() => toggleSelecaoUnica(
                  territorio,
                  territoriosSelecionados,
                  setTerritoriosSelecionados,
                  setDropdownTerritoriosOpen
                )}
              />
              {territorio}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
