'use client';

import Grafismo from "./Grafismo";


type CardSobreProps = {
  sobre: string;
  texto: string;
  slug: string;
};

export default function CardSobre({
  sobre,
  texto,
  slug,
}: CardSobreProps) {
  return (
    <div className={`cardSobre ${sobre.toLowerCase().replace(/\s+/g, '-')}`}>
        <div className="cardSobre__hover">
            <Grafismo />
        </div>
        <div className="cardSobre__content">
          <h2 className="cardSobre__header archivo uppercase condensed">
            {sobre}
          </h2>
          <p className="cardSobre__text">
            {texto}
          </p>
        </div>
        <button className="cardSobre__btn biz">
          → Saiba Mais
        </button>
    </div>
  );
}
