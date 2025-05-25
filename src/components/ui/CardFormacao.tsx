'use client';

import Link from "next/link";
import Grafismo from "./Grafismo";


type CardFormacaoProps = {
  formacao: string;
  texto: string;
  slug: string;
};

export default function CardFormacao({
  formacao,
  texto,
  slug,
}: CardFormacaoProps) {
  return (
    <Link href={`formacao/${slug}`} className={`cardFormacao ${formacao.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="cardFormacao__hover">
          <Grafismo />
      </div>
      {formacao === 'ciclo de conversas' ? (
        <h2 className="cardFormacao__header archivo uppercase condensed">
          CICLO DE<br />
          <span className="cardFormacao__header--right">CONVERSAS</span>
        </h2>
      ) : (
        <h2 className="cardFormacao__header archivo uppercase condensed">
          {formacao}
        </h2>
      )}
      <div 
        className="cardFormacao__text"
        dangerouslySetInnerHTML={{__html:texto}}
      />
    </Link>
  );
}
