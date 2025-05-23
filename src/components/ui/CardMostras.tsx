'use client';

type CardMostraProps = {
  mostra: string;
  texto: string;
  slug: string;
};

export default function CardMostra({
  mostra,
  texto,
  slug,
}: CardMostraProps) {
  return (
    <div className={`cardMostra ${mostra.toLowerCase().replace(/\s+/g, '-')}`}>
      <h2 className="cardMostra__header archivo uppercase condensed">
        {mostra}
      </h2>
      <p className="cardMostra__text">
        {texto}
      </p>
    </div>
  );
}
