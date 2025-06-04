import React from 'react'
import CardTerritorioFilmeAcervo from './CardTerritorioFilmeAcervo'
import HeaderSessao from './HeaderSessao'

export default function ListaTerritorioFilmeAcervo({ territorios }: { territorios: any[] }) {
  if (!territorios || territorios.length === 0) return null

  return (
    <div className="pageFilmeAcervo__territorio">
      <HeaderSessao nome='Territórios' font='biz' />
      <div className="pageFilmeAcervo__territorio-box">
        {territorios.map((territorio, index) => (
          <CardTerritorioFilmeAcervo key={index} territorio={territorio} />
        ))}
      </div>
    </div>
  )
}
