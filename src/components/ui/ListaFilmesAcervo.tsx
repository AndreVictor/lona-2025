import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Filme {
  title: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  informacoesAcervo: {
    fichaTecMini: string;
  };
}

export default function ListaFilmesAcervo({ filmes }: { filmes: Filme[] }) {
  if (!filmes || filmes.length === 0) return null;

  return (
    <section className="lista-filmes-acervo">
      <h2>Filmes do Acervo</h2>
      <div className="grid">
        {filmes.map((filme) => (
          <Link key={filme.slug} href={`/filmes/${filme.slug}`} className="card">
            <div className="thumb">
              {filme.featuredImage?.node?.sourceUrl && (
                <Image
                  src={filme.featuredImage.node.sourceUrl}
                  alt={filme.title}
                  width={400}
                  height={300}
                />
              )}
            </div>
            <div className="infos">
              <h3>{filme.title}</h3>
              <p>{filme.informacoesAcervo?.fichaTecMini}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
