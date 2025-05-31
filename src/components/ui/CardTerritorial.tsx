"use client";
import Link from "next/link";
import Grafismo from "./Grafismo";

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
    ano: string
  };
}

export default function CardTerritorial({
  territorio,
  link,
}: {
  territorio: Territorio;
  link: string;
}) {
  return (
    <Link href={link} className="listaTerritorio__card-link">
      <div className="listaTerritorio__card">
        <div className="listaTerritorio__card-img-box">
          <img
            src={
              territorio.featuredImage?.node?.sourceUrl
                ? territorio.featuredImage.node.sourceUrl
                : "/img/grafismo.png"
            }
            alt="Imagem do território ou grafismo padrão"
            className="listaTerritorio__card-img"
          />
        </div>
        <div className="listaTerritorio__card-content">
          <h3 className="listaTerritorio__card-title archivo condensed uppercase">
            {territorio.title}
          </h3>
          <p className="listaTerritorio__card-localizacao">
            {territorio.informacoesTerritorio?.localizacao}
          </p>
          <p className="listaTerritorio__card-localizacao">
            {territorio.informacoesTerritorio?.ano}
          </p>
        </div>
        <Grafismo />
      </div>
    </Link>
  );
}
