import React from 'react'
import CardFilmeTerritorio from './CardFilmeTerritorio'

export default function ListaFilmesTerritorio({ filmes }: { filmes: any[] }) {
  if (!filmes || filmes.length === 0) return null

  return (
    <div className="territorio__filme-box">
      {filmes.map((filme, index) => (
        <CardFilmeTerritorio key={index} filme={filme} />
      ))}
    </div>
  )
}
