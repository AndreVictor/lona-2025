import React from 'react'
import HeaderSessao from './ui/HeaderSessao'
import CardFormacao from './ui/CardFormacao'

type FormacaoProps = {
    formacao: {
      publicacoes: string;
      oficina: string;
      podcast: string;
      cicloDeConversas: string;
    };
  };

export default function Formacao({ formacao }: FormacaoProps) {
  return (
    <section className="home__formacao" id="formacao">
        <HeaderSessao
            nome="Formação"
            font="archivo"
        />
        <div className="home__mostras-box">
            <CardFormacao
                formacao='Publicações'
                texto={`${formacao.publicacoes.slice(0, 260)}...`}
                slug='publicacoes'
            />
            <CardFormacao
                formacao='Oficinas'
                texto={`${formacao.oficina.slice(0, 260)}...`}
                slug='oficinas'
            />
            <CardFormacao
                formacao='Podcast'
                texto={`${formacao.podcast.slice(0, 260)}...`}
                slug='podcast'
            />
            <CardFormacao
                formacao='ciclo de conversas'
                texto={`${formacao.cicloDeConversas.slice(0, 260)}...`}
                slug='ciclo-de-conversas'
            />
        </div>
    </section>
  )
}
