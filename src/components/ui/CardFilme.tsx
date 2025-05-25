"use client";

import { useState } from "react";
import Grafismo from "./Grafismo";

type CardFilmeProps = {
  imagem: string;
  sessao: string;
  titulo: string;
  direcao: string;
  local: string;
  data: string
};

export default function CardFilme({
  imagem,
  sessao,
  titulo,
  direcao,
  local,
  data
}: CardFilmeProps) {
  const [hover, setHover] = useState(false);
  return (
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
        alt={titulo}
        className="cardFilme__img"
        />
      <div className="cardFilme__content">
        <h6 className="cardFilme__sessao uppercase">{sessao}</h6>
        <h2 className="cardFilme__title archivo condensed uppercase">{titulo}</h2>
        <p className="cardFilme__direcao biz">{direcao}</p>
        <p className="cardFilme__local">{local}</p>
        <p className="cardFilme__data">{data}</p>
      </div>
      <Grafismo />
    </div>
  );
}
