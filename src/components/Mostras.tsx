import React from 'react'
import HeaderSessao from './ui/HeaderSessao'
import CardMostra from './ui/CardMostras'

type MostrasProps = {
  mostras: {
    atravessamentos: string;
    especial: string;
    homenagem: string;
    acervo: string;
  };
};

export default function Mostras({ mostras }: MostrasProps) {
  return (
    <section className="home__mostras" id="mostras">
        <HeaderSessao
            nome="Mostras"
            font="archivo"
        />
        <div className="home__mostras-box">
            <CardMostra 
                mostra="mostra atravessamentos"
                texto={`${mostras.atravessamentos.slice(0, 260)}...`}
                slug="atravessamentos"
            />
            <CardMostra 
                mostra="mostra homenagem"
                texto={`${mostras.homenagem.slice(0, 260)}...`}
                slug="homenagem"
            />
            <CardMostra 
                mostra="mostra especial"
                texto={`${mostras.especial.slice(0, 260)}...`}
                slug="especial"
            />
            <CardMostra 
                mostra="mostra acervo"
                texto={`${mostras.acervo.slice(0, 260)}...`}
                slug="acervo"
            />
        </div>
    </section>
  )
}
