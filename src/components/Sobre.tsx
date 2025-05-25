import CardSobre from './ui/CardSobre'
import HeaderSessao from './ui/HeaderSessao'
import React from 'react'

export default function Sobre() {
  return (
    <section className="home__sobre" id="sobre">
        <HeaderSessao
            nome="Sobre"
            font="archivo"
        />
        <div className="home__sobre-box">
            <CardSobre
                sobre='SOBRE A LONA'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
            <CardSobre
                sobre='O MLB'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
        </div>
    </section>
  )
}
