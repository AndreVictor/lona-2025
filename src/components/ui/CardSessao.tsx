"use client";

import { useState } from "react";
import Grafismo from "./Grafismo";

type CardSessaoProps = {
  imagem: string;
  sessao: string;
  filmes: string[];
  local: string;
  data: string
};

export default function CardSessao({
  imagem,
  sessao,
  filmes,
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
        alt={filmes[0]}
        className="cardSessao__img"
        />
      <div className="cardSessao__content">
        <h6 className="cardSessao__sessao uppercase">{sessao}</h6>
        <div className="cardSessao__title-box">
          {filmes.map((filme, index) => (
            <h2 key={index} className="cardSessao__title archivo condensed uppercase">
              {filme}
            </h2>
          ))}
        </div>
        <p className="cardSessao__local">{local} | {data}</p>
      </div>
      <Grafismo />
    </div>
  );
}
