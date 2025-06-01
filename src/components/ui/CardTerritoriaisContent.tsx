import React from 'react'
import { formatDate } from '@/utils/formatDate'

interface CardTerritoriaisContentProps {
  content: string
  data: string
  local: string
  localPrecisao: string
}

export default function CardTerritoriaisContent({
  content,
  data,
  local,
  localPrecisao,
}: CardTerritoriaisContentProps) {
  return (
    <div className="territoriais__info">
      <div className="territoriais__info-data">
        <h5>{formatDate(data)} | {local}</h5>
        <p>{localPrecisao}</p>
      </div>
      <div
        className="territoriais__info-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
