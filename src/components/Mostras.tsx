import React from 'react'
import HeaderSessao from './ui/HeaderSessao'
import CardMostra from './ui/CardMostras'

export default function Mostras() {
  return (
    <section className="home__mostras" id="mostras">
        <HeaderSessao
            nome="Mostras"
        />
        <div className="home__mostras-box">
            <CardMostra 
                mostra='mostra atravessamentos'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
            <CardMostra 
                mostra='mostra homenagem'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
            <CardMostra 
                mostra='mostra especial'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
            <CardMostra 
                mostra='mostra acervo'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
        </div>
    </section>
  )
}
