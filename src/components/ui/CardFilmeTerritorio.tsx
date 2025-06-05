import React from 'react'
import Image from 'next/image'

export default function CardFilmeTerritorio({ filme }: { filme: any }) {
  return (
    <div className="card-territorio">
      {filme.featuredImage?.node?.sourceUrl && (
        <Image
          src={filme.featuredImage.node.sourceUrl}
          alt={filme.title}
          width={500}
          height={300}
        />
      )}
      <h3>{filme.title}</h3>
      <p>{filme.informacoesAcervo?.fichaTecMini}</p>
    </div>
  )
}
