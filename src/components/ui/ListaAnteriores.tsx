import React from 'react';
import HeaderSessao from './HeaderSessao';
import CardAnteriores from './CardAnteriores';

type Props = {
  anteriores: {
    title: string;
    informacoesFilmes?: {
      fichaTecMini?: string;
      mostra?: string;
    };
  }[];
  slug: string;
};

export default function ListaAnteriores({ anteriores, slug }: Props) {
  
  return (
    <section className="anteriores" id="anteriores">
      <HeaderSessao
        nome="Edições Anteriores"
        font="biz"
      />
      <div className="anteriores-box">
        {anteriores
          .filter(item =>
            item.informacoesFilmes?.mostra?.toLowerCase().includes(slug.toLowerCase())
          )
          .map((item, index) => (
            <CardAnteriores
              key={index}
              titulo={item.title}
              mostra={item.informacoesFilmes?.mostra}
              fichaTecMini={item.informacoesFilmes?.fichaTecMini}
            />
          ))}
      </div>
    </section>
  );
}
