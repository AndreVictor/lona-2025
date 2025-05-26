"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import Grafismo from "./Grafismo";

type CardSessaoProps = {
  imagem: string;
  sessao: string;
  filmes: string[];
  local: string;
  data: string;
  link: string;
};

export default function CardSessao({
  imagem,
  sessao,
  filmes,
  local,
  data,
  link
}: CardSessaoProps) {
  const [hover, setHover] = useState(false);
  return (
    <Link href={link} className="cardSessao__link">
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
            {(() => {
              const filmesConcatenados = filmes.join(" – ");
              const filmesLimitados =
                filmesConcatenados.length > 75
                  ? filmesConcatenados.slice(0, 75) + "..."
                  : filmesConcatenados;

              return filmesLimitados
                .split(" – ")
                .map((filme, idx) => (
                  <h2
                    key={idx}
                    className="cardSessao__title archivo condensed uppercase"
                  >
                    → {filme}
                  </h2>
                ));
            })()}
          </div>
          <p className="cardSessao__local">
            {local} | {formatDate(data, true)}
          </p>
        </div>
        <Grafismo />
      </div>
    </Link>
  );
}
