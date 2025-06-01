import React from 'react'
import HeaderSessao from './HeaderSessao'
import CardTerritoriaisContent from './CardTerritoriaisContent'
import CardTerritoriaisFilme from './CardTerritoriaisFilme'
import CardTerritoriaisGaleria from './CardTerritoriaisGaleria'
import CardTerritoriaisParcerias from './CardTerritoriaisParcerias'

interface CardTerritoriaisPageProps {
  title: string
  slug: string
  content: string
  data: string
  local: string
  localPrecisao: string
  filmes: any[]
  galeria: string[]
  parceiros: string[]
}

export default function CardTerritoriaisPage({
  title,
  slug,
  content,
  data,
  local,
  localPrecisao,
  filmes,
  galeria,
  parceiros,
}: CardTerritoriaisPageProps) {
  return (
    <div className="territoriais__card" id={slug}>
      <HeaderSessao nome={title} font="biz" />
      <div className="territoriais__content">
        <CardTerritoriaisContent
          content={content}
          data={data}
          local={local}
          localPrecisao={localPrecisao}
        />
        <CardTerritoriaisFilme filmes={filmes} />
        <CardTerritoriaisGaleria galeria={galeria} />
        <CardTerritoriaisParcerias parceiros={parceiros} />
      </div>
    </div>
  )
}
