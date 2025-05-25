import HeaderSessao from '@/components/ui/HeaderSessao'
import React from 'react'

export default function page() {
  return (
    <section className="lona">
      <div className="lona__sidebar">
        <h1 className="lona__title archivo condensed uppercase">
          A lona
        </h1>
        <nav className="lona__nav">
          <ul>
            <li><a className="biz" href="#destaque">→ Próxima exibição</a></li>
            <li><a className="biz" href="#sessões">→ Sessões</a></li>
            <li><a className="biz" href="#filmes">→ Filmes</a></li>
            <li><a className="biz" href="#anteriores">→ Edições anteriores</a></li>
          </ul>
      </nav>
      </div>
      <div className="lona__content">
        <div className="lona__card">
          <HeaderSessao 
            nome = "sobre"
            font = "archivo"
          />
          <div className="lona__card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolor repudiandae soluta ea sapiente voluptate quibusdam quisquam eveniet iste ex delectus itaque, vero sint. Magni, voluptatem quia. Ut, doloribus repellendus.
          </div>
        </div>
        <div className="lona__equipe">
          <HeaderSessao 
            nome = "Equipe"
            font = "archivo"
          />
          <div className="lona__equipe-content">
          <p>
          COORDENAÇÃO DE ARTICULAÇÃO, AÇÃO TERRITORIAL E FORMAÇÃO
          Aiano Bemfica
          Edinho Vieira
          João Pedro
          Luis Flores
          Luisa Lanna
          Marina Morena 
          </p>
          <p>
          COORDENAÇÃO DE ARTICULAÇÃO, AÇÃO TERRITORIAL E FORMAÇÃO
          Aiano Bemfica
          Edinho Vieira
          João Pedro
          Luis Flores
          Luisa Lanna
          Marina Morena 
          </p>
          <p>
          COORDENAÇÃO DE ARTICULAÇÃO, AÇÃO TERRITORIAL E FORMAÇÃO
          Aiano Bemfica
          Edinho Vieira
          João Pedro
          Luis Flores
          Luisa Lanna
          Marina Morena 
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}
