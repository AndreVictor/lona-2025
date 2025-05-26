"use client";

import { useState } from "react";
import Link from "next/link";
import Grafismo from "./Grafismo";
import { formatDate } from '@/utils/formatDate';

type DestaqueCardProps = {
  imagem: string;
  sessao: string;
  titulo: string;
  direcao: string;
  data: string;
  local: string;
  link: string;
};

export default function DestaqueCard({
  imagem,
  sessao,
  titulo,
  direcao,
  data,
  local,
  link
}: DestaqueCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={link} className="destaqueSlider__card-link">
      <div
        className="destaqueSlider__card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="destaqueSlider__card-img-box">
          <Grafismo />
          <img
            src={
              hover
                ? imagem
                : `/api/bitmap?src=${encodeURIComponent(imagem)}`
            }
            alt={titulo}
            className="destaqueSlider__card-img"
          />
        </div>
        <div className="destaqueSlider__card-info">
          <p className="destaqueSlider__card-sessao">{sessao}</p>
          <h2 className="destaqueSlider__card-title archivo condensed uppercase">
            {titulo}
          </h2>
          <p className="destaqueSlider__card-tec biz">{direcao}</p>
          <p className="destaqueSlider__card-data">
            {local} | {formatDate(data)}
          </p>
        </div>
      </div>
    </Link>
  );
}