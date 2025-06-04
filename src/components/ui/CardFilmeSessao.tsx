import React from 'react'
import grafismo from '@/assets/grafismo.png'

type FilmeProps = {
  title: string;
  slug: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    }
  };
  informacoesFilmes?: {
    fichaTecMini: string;
    fichaTecCompleta: string;
  };
  informacoesAcervo?: {
    fichaTecMini: string;
    fichaTecCompleta: string;
  };
  descricao?: string;
};

export default function CardFilmeSessao({ filme }: { filme: FilmeProps }) {
  const imagem = filme.featuredImage?.node?.sourceUrl || grafismo.src;
  const fichaCompleta = filme.informacoesFilmes?.fichaTecCompleta || filme.informacoesAcervo?.fichaTecCompleta || '';
  const fichaMini = filme.informacoesFilmes?.fichaTecMini || filme.informacoesAcervo?.fichaTecMini || '';

  return (
    <div className="cardFilmeSessao">
      <div className="cardFilmeSessao__col1">
        <img src={imagem} alt="" className="cardFilmeSessao__img" />
        <div className="cardFilmeSessao__fichatec-mini">
          FICHA TÉCNICA
          <div dangerouslySetInnerHTML={{__html:fichaCompleta}}></div>
        </div>
      </div>
      <div className="cardFilmeSessao__col2">
        <h3 className="cardFilmeSessao__title archivo condensed uppercase">
          {filme.title}
        </h3>
        <div className="cardFilmeSessao__fichatec biz">
          {fichaMini}
        </div>
        {filme.content && (
          <div 
            className="cardFilmeSessao__text"
            dangerouslySetInnerHTML={{__html:filme.content}}
          >
          </div>
        )}
      </div>
    </div>
  )
}

export type { FilmeProps };
