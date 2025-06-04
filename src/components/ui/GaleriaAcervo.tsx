"use client";

import React from 'react';
import HeaderSessao from './HeaderSessao';

interface GaleriaAcervoProps {
  galeria: string[];
}

export default function GaleriaAcervo({ galeria }: GaleriaAcervoProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galeria.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galeria.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBulletClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="pageFilmeAcervo__galeria">
      <HeaderSessao nome='Galeria de fotos' font='biz' />
      <div className="pageFilmeAcervo__galeria-slider">
        <div
          className="pageFilmeAcervo__galeria-inner"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
            transition: "transform 0.3s ease-in-out",
            width: `${galeria.length * 100}%`
          }}
        >
          {galeria.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagem ${index + 1}`}
              className="pageFilmeAcervo__galeria-img"
            />
          ))}
        </div>
        <div className="pageFilmeAcervo__galeria-control">
          <div className="pageFilmeAcervo__galeria-bullets">
            {galeria.map((_, index) => (
              <span
                key={index}
                className={`pageFilmeAcervo__galeria-bullet ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleBulletClick(index)}
              >
                &nbsp;
              </span>
            ))}
          </div>
          <div className="pageFilmeAcervo__galeria-arrows">
            <button onClick={handlePrev} className="pageFilmeAcervo__galeria-arrow esquerda">←</button>
            <button onClick={handleNext} className="pageFilmeAcervo__galeria-arrow direita">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
