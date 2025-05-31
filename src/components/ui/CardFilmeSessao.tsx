import React from 'react'
import grafismo from '@/assets/grafismo.png'

type FilmeProps = {
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    }
  };
  informacoesFilmes: {
    fichaTecMini: string;
  };
  descricao?: string;
};

export default function CardFilmeSessao({ filme }: { filme: FilmeProps }) {
  const imagem = filme.featuredImage?.node?.sourceUrl || grafismo.src;

  return (
    <div className="cardFilmeSessao">
      <div className="cardFilmeSessao__col1">
        <img src={imagem} alt="" className="cardFilmeSessao__img" />
        <div className="cardFilmeSessao__fichatec-mini">
          FICHA TÉCNICA
          <br />
          {filme.informacoesFilmes.fichaTecMini}
        </div>
      </div>
      <div className="cardFilmeSessao__col2">
        <h3 className="cardFilmeSessao__title archivo condensed uppercase">
          {filme.title}
        </h3>
        <div className="cardFilmeSessao__fichatec biz">
          {filme.informacoesFilmes.fichaTecMini}
        </div>
        {filme.descricao && (
          <div className="cardFilmeSessao__text">
            {filme.descricao}
          </div>
        )}
      </div>
    </div>
  )
}
