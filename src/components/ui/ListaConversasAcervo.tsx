import React from 'react'
import CardConversasAcervo from './CardConversasAcervo'
import HeaderSessao from './HeaderSessao'

interface ListaConversasAcervoProps {
  embed1: string
  embed2: string
  titulo1: string
  titulo2: string
  texto1: string
  texto2: string
}

export default function ListaConversasAcervo({
  embed1,
  embed2,
  titulo1,
  titulo2,
  texto1,
  texto2
}: ListaConversasAcervoProps) {
  return (
    <div className="pageFilmeAcervo__conversas">
      <HeaderSessao nome='Conversas' font='biz' />
      <div className="pageFilmeAcervo__conversas-box">
        <CardConversasAcervo embed={embed1} titulo={titulo1} texto={texto1} />
        <CardConversasAcervo embed={embed2} titulo={titulo2} texto={texto2} />
      </div>
    </div>
  )
}
