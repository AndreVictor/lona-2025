"use client";

import { useState } from "react";
import { formatDate } from "@/utils/formatDate";
import DestaqueSlider from "@/components/ui/DestaqueSlider";
import ListaFilmes from "@/components/ui/ListaFilmes";
import ListaSessao from "@/components/ui/ListaSessao";
import MenuFiltrosMostra from "@/components/ui/MenuFiltrosMostra";
import SidebarMostra from "@/components/ui/SidebarMostra";
import ListaFilmesAcervo from "@/components/ui/ListaFilmesAcervo";
import ListaTerritoriosAcervo from "@/components/ui/ListaTerritoriosAcervo";

type PageAcervoProps = {
  slug: string;
  content: string;
  sessoes: any[];
  acervos: any[];
  territorios: any[];
  infoKey: string;
};

export default function PageAcervo({
  slug,
  content,
  sessoes,
  acervos,
  territorios,
  infoKey,
}: PageAcervoProps) {
  const [filtro, setFiltro] = useState("sessoes");
  const [datasSelecionadas, setDatasSelecionadas] = useState<string[]>([]);
  const [locaisSelecionados, setLocaisSelecionados] = useState<string[]>([]);

  const datasUnicas = Array.from(
    new Set(
      sessoes
        .map((sessao) => {
          const info = sessao[infoKey];
          const dataBruta = info?.dataInicial;
          return dataBruta ? formatDate(dataBruta, false) : null;
        })
        .filter((item): item is string => Boolean(item))
    )
  );

  const locaisUnicos = Array.from(
    new Set(
      sessoes
        .map((sessao) => sessao[infoKey]?.local)
        .filter(Boolean)
    )
  );

  const sessoesFiltradas = sessoes.filter((sessao) => {
    const info = sessao[infoKey];
    const data = formatDate(info?.dataInicial, false) ?? "";
    const local = info?.local;

    const filtraPorData =
      datasSelecionadas.length === 0 ||
      (data && datasSelecionadas.includes(data));
    const filtraPorLocal =
      locaisSelecionados.length === 0 || locaisSelecionados.includes(local);

    return filtraPorData && filtraPorLocal;
  });

  return (
    <div className={`mostra mostra--${slug}`}>
      <div className="mostra__sidebar">
        <SidebarMostra mostra={`Mostra Acervo`} content={content} />
      </div>
      <div className="mostra__content">
        <DestaqueSlider sessoes={sessoesFiltradas} nomeMostra={slug} />
        <MenuFiltrosMostra
          filtro={filtro}
          setFiltro={setFiltro}
          datas={datasUnicas}
          locais={locaisUnicos}
          datasSelecionadas={datasSelecionadas}
          setDatasSelecionadas={setDatasSelecionadas}
          locaisSelecionados={locaisSelecionados}
          setLocaisSelecionados={setLocaisSelecionados}
        />
        {filtro === "filmes" ? (
          <ListaFilmes sessoes={sessoesFiltradas} nomeMostra={slug} />
        ) : (
          <ListaSessao sessoes={sessoesFiltradas} nomeMostra={slug} />
        )}

          <ListaFilmesAcervo filmes={acervos} />
          <ListaTerritoriosAcervo territorios={territorios} />
      </div>
    </div>
  );
}