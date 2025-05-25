import CardSobre from './ui/CardSobre'
import HeaderSessao from './ui/HeaderSessao'
import React from 'react'

type SobreProps = {
    sobre: {
      content: string;
      informacoesLona: {
        sobreMlb: string;
      }
    };
  };

export default function Sobre({ sobre }: SobreProps) {
  return (
    <section className="home__sobre" id="sobre">
        <HeaderSessao
            nome="Sobre"
            font="archivo"
        />
        <div className="home__sobre-box">
            <CardSobre
                sobre='SOBRE A LONA'
                texto={`${sobre.content.slice(0, 460)}...`}
                slug=''
            />
            <CardSobre
                sobre='O MLB'
                texto={`${sobre.informacoesLona.sobreMlb.slice(0, 460)}...`}
                slug='#o-Mlb'
            />
        </div>
    </section>
  )
}
