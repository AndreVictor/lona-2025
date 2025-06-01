import React from 'react'

interface CardTerritoriaisParceriasProps {
  parceiros: string[]
}

export default function CardTerritoriaisParcerias({ parceiros }: CardTerritoriaisParceriasProps) {
  return (
    <div className="territoriais__parcerias">
      <h5 className="biz">PARCERIAS</h5>
    <div className="territoriais__parcerias-box">
      {parceiros.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`parceiro-${index + 1}`}
          className="territoriais__parcerias-img"
        />
      ))}
    </div>
    </div>
  )
}
