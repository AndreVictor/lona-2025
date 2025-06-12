"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Grafismo from './Grafismo';

export default function CardFilmeTerritorio({ filme }: { filme: any }) {
  return (
    <Link href={`/acervo/filmes/${filme.slug}`} className="cardFilme__link">
      <div 
        className="cardFilme"
      >
      {filme.featuredImage?.node?.sourceUrl && (
        <Image
          src={filme.featuredImage.node.sourceUrl}
          alt={filme.title}
          width={500}
          height={300}
          className="cardFilme__img"
        />
      )}
        <div className="cardFilme__content">
          <h2 className="cardFilme__title archivo condensed uppercase">{filme.title}</h2>
          <p className="cardFilme__data">{filme.informacoesAcervo?.fichaTecMini}</p>
        </div>
        <Grafismo />
      </div>
    </Link>
  )
}
