'use client';


type CardProgProps = {
  categoria: string;
  filme: string;
  direcao: string;
  data: string;
  local: string;
  imagem: string;
};

export default function CardProg({
  categoria,
  filme,
  direcao,
  data,
  local,
  imagem,
}: CardProgProps) {
  return (
    <div className={`cardProg cardProg--${categoria.toLowerCase().replace(/\s+/g, '-')}`}>
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
          <h2 className="cardProg__filme archivo uppercase condensed">{filme}</h2>
          <p className="cardProg__direcao biz">{direcao}</p>
        </div>
        <div className="cardProg__info biz">
          <p>{data}</p>
          <p>{local}</p>
        </div>
      </div>
    </div>
  );
}
