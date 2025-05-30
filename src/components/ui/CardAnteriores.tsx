import React from 'react';
import imgTeste from '@/assets/imgTeste.jpg';

type Props = {
  titulo: string;
  fichaTecMini?: string;
  imagem?: string;
};

export default function CardAnteriores({ titulo, fichaTecMini, imagem }: Props) {
  return (
    <div className="cardAnterior">
      <img src={imagem ? imagem : "/img/grafismo.png"} alt="Imagem do filme ou grafismo padrão" className="cardAnterior__img" />
      <div className="cardAnterior__content">
        <p className="cardAnterior__title archivo condensed uppercase">
          {titulo}
        </p>
        <p className="cardAnterior__info">
          {fichaTecMini}
        </p>
      </div>
    </div>
  );
}
