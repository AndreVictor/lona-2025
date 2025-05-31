import React from 'react'
import HeaderSessao from './HeaderSessao'
import CardFilmeSessao from './CardFilmeSessao'

export default function FilmesSessao({ filmes = [] }: { filmes?: Array<any> }) {
  return (
    <div className="pageSessao__filmes-box">
      <HeaderSessao
        nome="Filmes"
        font="biz"
      />
      <div className="pageSessao__card-box">
        {filmes.map((filme, index) => (
          <CardFilmeSessao key={index} filme={filme} />
        ))}
      </div>
    </div>
  )
}
