import React from 'react';
import imgTeste from '@/assets/imgTeste.jpg';

type Props = {
  titulo: string;
  mostra?: string;
  fichaTecMini?: string;
};

export default function CardAnteriores({ titulo, mostra, fichaTecMini }: Props) {
  return (
    <div className="cardAnterior">
      <img src={imgTeste.src} alt="" className="cardAnterior__img" />
      <div className="cardAnterior__content">
        <p className="cardAnterior__title archivo condensed uppercase">
          {titulo}
        </p>
        <p className="cardAnterior__info">
          {mostra && <>{mostra}<br/></>}
          {fichaTecMini}
        </p>
      </div>
    </div>
  );
}
