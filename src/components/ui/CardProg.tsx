'use client';

import Link from 'next/link';
import { formatDate } from '@/utils/formatDate';

type CardProgProps = {
  categoria: string;
  classCategoria: string;
  filmes: string[];
  data: string;
  local: string;
  imagem: string;
  link: string;
};

export default function CardProg({
  categoria,
  classCategoria,
  filmes,
  data,
  local,
  imagem,
  link,
}: CardProgProps) {
  return (
    <Link href={link} className={`cardProg cardProg--${classCategoria.toLowerCase().replace(/\s+/g, '-')}`}>
      <img
        src={`/api/bitmap?src=${encodeURIComponent(imagem)}`}
        alt="Descrição"
        className="cardProg__img"
      />
      <div className="cardProg__container">
        <div className="cardProg__header">
          <p className="cardProg__categoria uppercase biz">{categoria}</p>
        </div>
        <div className="cardProg__content">
          <h2 className="cardProg__filme archivo uppercase condensed">
            {(() => {
              const filmesString = filmes.flat().join(' / ');
              const textoLimitado = filmesString.length > 120 ? filmesString.slice(0, 120) + '...' : filmesString;
              return textoLimitado.split(' / ').map((filme, index) => (
                <div key={index}>
                → {filme}
                </div>
              ));
            })()}
          </h2>
        </div>
        <div className="cardProg__info biz">
          <p>{formatDate(data)}</p>
          <p>{local}</p>
        </div>
      </div>
    </Link>
  );
}