'use client';

import Link from "next/link";
import Grafismo from "./Grafismo";

type CardMostraProps = {
  mostra: string;
  texto: string;
  slug: string;
};

export default function CardMostra({
  mostra,
  texto,
  slug,
}: CardMostraProps) {
  return (
    <Link href={`mostras/${slug}`} className={`cardMostra ${mostra.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="cardMostra__hover">
                <Grafismo />
            </div>
            {mostra === 'mostra atravessamentos' ? (
              <h2 className="cardMostra__header archivo uppercase condensed">
                mostra atravess<br />
                <span className="cardMostra__header--right">amentos</span>
              </h2>
            ) : (
              <h2 className="cardMostra__header archivo uppercase condensed">
                {mostra}
              </h2>
            )}
      <div 
        className="cardMostra__text"
        dangerouslySetInnerHTML={{__html:texto}}
      />
    </Link>
  );
}
