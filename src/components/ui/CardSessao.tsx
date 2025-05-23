"use client";

import { useState } from "react";
import Grafismo from "./Grafismo";

type CardSessaoProps = {
  imagem: string;
  sessao: string;
  titulo: string;
  direcao: string;
  local: string;
  data: string
};

export default function CardSessao({
  imagem,
  sessao,
  titulo,
  direcao,
  local,
  data
}: CardSessaoProps) {
  const [hover, setHover] = useState(false);
  return (
    <div 
      className="cardSessao"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={
            hover
            ? imagem
            : `/api/bitmap?src=${encodeURIComponent(imagem)}`
        }
        alt={titulo}
        className="cardSessao__img"
        />
      <div className="cardSessao__content">
        <h6 className="cardSessao__sessao uppercase">{sessao}</h6>
        <h2 className="cardSessao__title archivo condensed uppercase">{titulo}</h2>
        <p className="cardSessao__direcao biz">{direcao}</p>
        <p className="cardSessao__local">{local}</p>
        <p className="cardSessao__data">{data}</p>
      </div>
      <Grafismo />
    </div>
  );
}
