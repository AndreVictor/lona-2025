import React from 'react'

interface Filme {
  title: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  informacoesFilmes?: {
    fichaTecMini: string
  }
}

interface CardTerritoriaisFilmeProps {
  filmes: Filme[] | null | undefined
}

export default function CardTerritoriaisFilme({ filmes }: CardTerritoriaisFilmeProps) {
  if (!Array.isArray(filmes)) return null;

  return (
    <div className="territoriais__filmes">
      <h3 className="biz">FILMES</h3>
      {filmes.map((filme, index) => (
        <div key={index} className="territoriais__filme">
          <img
            src={filme.featuredImage?.node?.sourceUrl || "img/grafismo.png"}
            alt={filme.title}
          />
          <div className="territorias__filme-content">
             <h4 className='archivo uppercase condensed'>{filme.title}</h4>
             <p>{filme.informacoesFilmes?.fichaTecMini}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
