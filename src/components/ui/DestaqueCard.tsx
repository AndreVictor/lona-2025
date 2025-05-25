"use client";

import { useState } from "react";
import Grafismo from "./Grafismo";

type DestaqueCardProps = {
  imagem: string;
  sessao: string;
  titulo: string;
  direcao: string;
  data: string;
  local: string;
};

export default function DestaqueCard({
  imagem,
  sessao,
  titulo,
  direcao,
  data,
  local
}: DestaqueCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="destaqueSlider__card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="destaqueSlider__card-content">
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
          <p className="destaqueSlider__card-sessao">
            {sessao}
          </p>
          <h2 className="destaqueSlider__card-title archivo condensed uppercase">
            {titulo}
          </h2>
          <p className="destaqueSlider__card-tec biz">
            {direcao}
          </p>
          <p className="destaqueSlider__card-data">
            {local} | {data} 
          </p>
        </div>
      </div>
    </div>
  );
}
