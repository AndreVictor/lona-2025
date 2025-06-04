import React from 'react'

interface CardConversasAcervoProps {
  embed: string
  titulo: string
  texto: string
}

export default function CardConversasAcervo({
  embed,
  titulo,
  texto
}: CardConversasAcervoProps) {
  return (
    <div className="cardConversasAcervo">
      <h3 className="cardConversasAcervo__titulo">{titulo}</h3>
      <div
        className="cardConversasAcervo__embed"
        dangerouslySetInnerHTML={{ __html: embed }}
      />
      <p className="cardConversasAcervo__texto">{texto}</p>
    </div>
  )
}
