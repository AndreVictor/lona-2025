import React from 'react'
import CardSessao from './CardSessao'

export default function ListaSessao() {
  return (
    <section className="listaSessao" id="sessao">
        <CardSessao 
            imagem="https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/Essa-Terra-1.jpeg"
            sessao="SESSÃO 1"
            filmes={[
                "Trabalhadores Rurais",
                "Getulina, Meu Amor",
                "Construção",
                "Quilombo Mata-Cavalo"
            ]}
            local="Ocupação Maria do Arraial"
            data="08 maio – 19h"
        />
    </section>
  )
}
