import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderSessao from "./HeaderSessao";
import MenuFiltroAcervo from "./MenuFiltroAcervo";
import CardFilmeAcervo from "./CardFilmeAcervo";

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
    territorio?: {
      title: string;
    }[];
  };
}

export default function ListaFilmesAcervo({ filmes }: { filmes: Filme[] }) {
  if (!filmes || filmes.length === 0) return null;

  const [territoriosSelecionados, setTerritoriosSelecionados] = React.useState<string[]>([]);

  const filmesFiltrados = filmes.filter((filme) => {
    const territoriosDoFilme = filme.informacoesAcervo.territorio?.map((t) => t.title) || [];
    return (
      territoriosSelecionados.length === 0 ||
      territoriosDoFilme.some((territorio) => territoriosSelecionados.includes(territorio))
    );
  });

  return (
    <section className="filmesAcervo" id="filmesAcervo">
      <HeaderSessao
        nome="Filmes Acervo"
        font="biz"
      />
      <MenuFiltroAcervo
        territorios={[...new Set(filmes.flatMap(filme => filme.informacoesAcervo.territorio?.map(t => t.title) || []))]}
        territoriosSelecionados={territoriosSelecionados}
        setTerritoriosSelecionados={setTerritoriosSelecionados}
      />
      <div className="filmesAcervo__card-box">
        {filmesFiltrados.map((filme) => (
          <CardFilmeAcervo key={filme.slug} filme={filme} />
        ))}
      </div>
    </section>
  );
}
