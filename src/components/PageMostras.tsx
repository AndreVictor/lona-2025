"use client";

import { useState } from "react";
import { formatDate } from "@/utils/formatDate";
import DestaqueSlider from "@/components/ui/DestaqueSlider";
import ListaFilmes from "@/components/ui/ListaFilmes";
import ListaSessao from "@/components/ui/ListaSessao";
import MenuFiltrosMostra from "@/components/ui/MenuFiltrosMostra";
import SidebarMostra from "@/components/ui/SidebarMostra";

type PageMostrasProps = {
  slug: string;
  content: string;
  sessoes: any[];
  infoKey: string;
};

export default function PageMostras(props: PageMostrasProps) {
  const { slug, content, sessoes, infoKey } = props;
  const [filtro, setFiltro] = useState("sessoes");
  const [datasSelecionadas, setDatasSelecionadas] = useState<string[]>([]);
  const [locaisSelecionados, setLocaisSelecionados] = useState<string[]>([]);

  const datasUnicas = Array.from(
    new Set(
      (sessoes || [])
        .map(sessao => {
          const info = sessao[infoKey];
          const dataBruta = info?.dataInicial;
          return dataBruta ? formatDate(dataBruta, false) : null;
        })
        .filter((item): item is string => Boolean(item))
    )
  );

  const locaisUnicos = Array.from(
    new Set(
      (sessoes || [])
        .map(sessao => {
          const info = sessao[infoKey];
          return info?.local;
        })
        .filter(Boolean)
    )
  );

  const sessoesFiltradas = (sessoes || []).filter(sessao => {
    const info = sessao[infoKey];
    const data = formatDate(info?.dataInicial, false) ?? "";
    const local = info?.local;

    const filtraPorData =
      datasSelecionadas.length === 0 || (data && datasSelecionadas.includes(data));
    const filtraPorLocal =
      locaisSelecionados.length === 0 || locaisSelecionados.includes(local);

    return filtraPorData && filtraPorLocal;
  });

  return (
    <div className={`mostra mostra--${slug}`}>
      <div className="mostra__sidebar">
        <SidebarMostra mostra={`mostra ${slug}`} content={content} />
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
          sessoesFiltradas.length > 0 ? (
            <ListaFilmes sessoes={sessoesFiltradas} nomeMostra={slug} />
          ) : null
        ) : (
          sessoesFiltradas.length > 0 ? (
            <ListaSessao sessoes={sessoesFiltradas} nomeMostra={slug} />
          ) : null
        )}
      </div>
    </div>
  );
}