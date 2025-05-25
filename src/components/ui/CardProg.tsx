'use client';

import Link from 'next/link';

type CardProgProps = {
  categoria: string;
  classCategoria: string;
  filmes: string[];
  data: string;
  local: string;
  imagem: string;
  link: string;
};

export default function CardProg({
  categoria,
  classCategoria,
  filmes,
  data,
  local,
  imagem,
  link,
}: CardProgProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';

    const [dataPart, horaPartRaw] = dateString.split(' ');
    const [dia, mes, ano] = dataPart.split('/');

    let [hora, minutos] = ['00', '00'];
    let periodo = '';

    if (horaPartRaw) {
      const horaPart = horaPartRaw.split(':');
      if (horaPart.length > 1) {
        hora = horaPart[0];
        const minutosPart = horaPart[1].split(' ');
        minutos = minutosPart[0];
        periodo = minutosPart[1];
      }
    }

    let horaInt = parseInt(hora, 10);
    if (periodo === 'pm' && horaInt < 12) horaInt += 12;
    if (periodo === 'am' && horaInt === 12) horaInt = 0;

    const horaStr = horaInt.toString().padStart(2, '0');

    const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const mesIndex = parseInt(mes, 10) - 1;
    const mesStr = meses[mesIndex] || mes;

    return `${dia} ${mesStr} ${ano} – ${horaStr}h${minutos}`;
  };

  return (
    <Link href={link} className={`cardProg cardProg--${classCategoria.toLowerCase().replace(/\s+/g, '-')}`}>
      <img
        src={`/api/bitmap?src=${encodeURIComponent(imagem)}`}
        alt="Descrição"
        className="cardProg__img"
      />
      <div className="cardProg__container">
        <div className="cardProg__header">
          <p className="cardProg__categoria uppercase biz">{categoria}</p>
        </div>
        <div className="cardProg__content">
          <h2 className="cardProg__filme archivo uppercase condensed">
            {(() => {
              const filmesString = filmes.join(' / ');
              const textoLimitado = filmesString.length > 120 ? filmesString.slice(0, 120) + '...' : filmesString;
              return textoLimitado.split(' / ').map((filme, index) => (
                <div key={index}>
                → {filme}
                </div>
              ));
            })()}
          </h2>
        </div>
        <div className="cardProg__info biz">
          <p>{formatDate(data)}</p>
          <p>{local}</p>
        </div>
      </div>
    </Link>
  );
}