import { useState } from "react";
import Grafismo from "./Grafismo";
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
    territorio?: {
      title: string;
    }[];
  };
}

export default function CardFilmeAcervo({ filme }: { filme: Filme }) {
  const [hover, setHover] = useState(false);
  const imagem = filme.featuredImage?.node?.sourceUrl || "/img/grafismo.png";

  return (
    <Link href={`/acervo/filmes/${filme.slug}`} className="cardFilme__link">
      <div
        className="cardFilme"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={
            hover
              ? imagem
              : `/api/bitmap?src=${encodeURIComponent(imagem)}`
          }
          alt={filme.title}
          className="cardFilme__img"
        />
        <div className="cardFilme__content">
          <h2 className="cardFilme__title archivo condensed uppercase">{filme.title}</h2>
          <p className="cardFilme__acervo-direcao">{filme.informacoesAcervo?.fichaTecMini}</p>
          {filme.informacoesAcervo?.territorio?.[0]?.title && (
            <p className="cardFilme__acervo-territorio biz">{filme.informacoesAcervo.territorio[0].title}</p>
          )}
        </div>
        <Grafismo />
      </div>
    </Link>
  );
}
