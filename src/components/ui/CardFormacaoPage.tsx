import React from 'react'
import HeaderSessao from './HeaderSessao'
import imgTeste from '@/assets/imgTeste.jpg'

export default function CardFormacaoPage() {
  return (
    <div className="cardFormacaoPage">
        <HeaderSessao 
            nome = "VOL.1 –IMAGEM"
            font = "biz"
        />
        <div className="cardFormacaoPage__content">
            <div className="cardFormacaoPage__col-1">
                <img src={imgTeste.src} alt="" className="cardFormacaoPage__img cardFormacaoPage__img--publicacoes" />
                <a href="#" className="cardFormacaoPage__link biz publicacoes uppercase">
                    → DOWNLOAD PDF
                </a>
            </div>
            <div className="cardFormacaoPage__col2">
                2023

                O último volume dessa primeira leva de Cadernos LONA reúne textos a partir do eixo TERRITÓRIO. Esse é um tema que atravessa e define a LONA desde o início, quando começamos a pensar numa mostra de cinema com filmes que tematizam a luta pela moradia e pela terra no campo e na cidade, nas ocupações, nos acampamentos, nas retomadas, nas favelas e nos territórios tradicionais. Alguns dos textos reunidos neste caderno foram escritos durante a primeira edição da LONA e, aqui, conectam-se com novas e inéditas produções escritas, se aproximando mediante a rebeldia de lutar pela existência de lugares onde se possam florescer vida e utopia. Eles apontam para os territórios, para as experiências vividas por cada um que luta para ter onde construir um território para si e para os seus, incluindo aí não só os que virão, mas também seus ancestrais. Isto é, um chão que é construído, sonhado e é também retomado.

                Autores: Rafael Mello; Leíner Hoki; Dayane Tropicaos; Marcela Silviano Brandão; Fábio Jota, Karine Assis; Joyce Delfim; Mirrah da Silva

                Entrevistada: Poliana Souza

                Artista Visual: Lorrayne Antonielle
            </div>
        </div>

    </div>
  )
}
