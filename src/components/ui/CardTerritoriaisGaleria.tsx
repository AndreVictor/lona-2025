"use client";

import React from 'react'

interface CardTerritoriaisGaleriaProps {
  galeria: string[]
}

export default function CardTerritoriaisGaleria({ galeria }: CardTerritoriaisGaleriaProps) {
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
    <div className="territoriais__card-galeria">
      <div className="territoriais__card-galeria-slider">
        <div
          className="territoriais__card-galeria-inner"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
            transition: "transform 0.3s ease-in-out"
          }}
        >
          {galeria.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagem ${index + 1}`}
              className="territoriais__card-galeria-img"
            />
          ))}
        </div>
        <div className="territoriais__card-galeria-control">
          <div className="territoriais__card-galeria-bullets">
            {galeria.map((_, index) => (
              <span
                key={index}
                className={`territoriais__card-galeria-bullet ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleBulletClick(index)}
              >
                &nbsp;
              </span>
            ))}
          </div>
          <div className="territoriais__card-galeria-arrows">
            <button onClick={handlePrev} className="territoriais__card-galeria-arrow esquerda">→</button>
            <button onClick={handleNext} className="territoriais__card-galeria-arrow direita">→</button>
          </div>
        </div>
      </div>
    </div>
  )
}
