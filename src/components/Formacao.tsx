import React from 'react'
import HeaderSessao from './ui/HeaderSessao'
import CardFormacao from './ui/CardFormacao'

export default function Formacao() {
  return (
    <section className="home__formacao" id="formacao">
        <HeaderSessao
            nome="Formação"
            font="archivo"
        />
        <div className="home__mostras-box">
            <CardFormacao
                formacao='Publicações'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
            <CardFormacao
                formacao='Oficinas'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
            <CardFormacao
                formacao='Podcast'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
            <CardFormacao
                formacao='ciclo de conversas'
                texto='Da primeira edição da Mostra Atravessamentos, realizada em 2020, ao crucial ano de 2022, assistimos à intensificação de uma crise generalizada que atravessa o país de ponta a ponta, afetando de modo desproporcional as famílias mais pobres e periféricas… →'
                slug='mostra-atravessamentos'
            />
        </div>
    </section>
  )
}
