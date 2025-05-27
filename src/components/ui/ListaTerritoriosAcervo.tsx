import React from "react";
import Image from "next/image";

interface Territorio {
  title: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  informacoesTerritorio: {
    localizacao: string;
  };
}

export default function ListaTerritoriosAcervo({
  territorios,
}: {
  territorios: Territorio[];
}) {
  if (!territorios || territorios.length === 0) return null;

  return (
    <section className="lista-territorios-acervo">
      <h2>Territórios</h2>
      <div className="grid">
        {territorios.map((territorio) => (
          <div key={territorio.title} className="card">
            <div className="thumb">
              {territorio.featuredImage?.node?.sourceUrl && (
                <Image
                  src={territorio.featuredImage.node.sourceUrl}
                  alt={territorio.title}
                  width={400}
                  height={300}
                />
              )}
            </div>
            <div className="infos">
              <h3>{territorio.title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: territorio.content,
                }}
              />
              <p className="localizacao">
                {territorio.informacoesTerritorio?.localizacao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
