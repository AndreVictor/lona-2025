"use client";

import { useState } from "react";
import Grafismo from "./Grafismo";
import Link from "next/link";

type CardFilmeProps = {
  imagem: string;
  sessao: string;
  titulo: string;
  direcao: string;
  local: string;
  data: string;
  link: string;
};

export default function CardFilme({
  imagem,
  sessao,
  titulo,
  direcao,
  local,
  data,
  link
}: CardFilmeProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={link} className="cardFilme__link">
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
    </Link>
  );
}