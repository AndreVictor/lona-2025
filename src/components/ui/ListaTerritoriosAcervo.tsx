import React from "react";
import Image from "next/image";
import CardTerritorial from "./CardTerritorial";
import HeaderSessao from "./HeaderSessao";

interface Territorio {
  title: string;
  slug: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  informacoesTerritorio: {
    localizacao: string;
    ano: string;
  };
}

export default function ListaTerritoriosAcervo({
  territorios,
}: {
  territorios: Territorio[];
}) {
  if (!territorios || territorios.length === 0) return null;

  return (
    <section className="listaTerritorio" id="territorios">
      <HeaderSessao
        nome="Territórios"
        font="biz"
      />
      <div className="listaTerritorio__card-box">
        {territorios.map((territorio) => (
          <CardTerritorial key={territorio.title} territorio={territorio} link={`/territorios/${territorio.slug}`} />
        ))}
      </div>
    </section>
  );
}
