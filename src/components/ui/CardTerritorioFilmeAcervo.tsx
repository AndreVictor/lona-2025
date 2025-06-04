import React from 'react'
import Image from 'next/image'

export default function CardTerritorioFilmeAcervo({ territorio }: { territorio: any }) {
  if (!territorio) return null

  const { title, content, featuredImage } = territorio
  const imagem = featuredImage?.node?.sourceUrl

  return (
    <div className="pageFilmeAcervo__territorio-card">
      {imagem && (
        <div className="pageFilmeAcervo__territorio-img">
          <Image src={imagem} alt={title} width={800} height={600} />
        </div>
      )}
      <div className="pageFilmeAcervo__territorio-content">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
