import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Grafismo from './Grafismo'

export default function CardTerritorioFilmeAcervo({ territorio }: { territorio: any }) {
  if (!territorio) return null

  const { title, content, featuredImage, informacoesTerritorio, slug } = territorio || {}
  const imagem = featuredImage?.node?.sourceUrl

  return (
    <div className="pageFilmeAcervo__territorio-card">
      <Link href={`/territorios/${slug}`}>
        <Grafismo />
        {imagem && (
          <div className="pageFilmeAcervo__territorio-img">
            <Image src={imagem} alt={title} width={800} height={600} />
          </div>
        )}
        <div className="pageFilmeAcervo__territorio-content">
          <h3 className='pageFilmeAcervo__territorio-title archivo condensed uppercase'>{title}</h3>
          <p className="pageFilmeAcervo__territorio-localizacao biz uppercase">
            {informacoesTerritorio.localizacao}
          </p>
          <p>{content?.replace(/<[^>]+>/g, '').slice(0, 200)}...</p>
        </div>
      </Link>
    </div>
  )
}
