import React from 'react'
import SidebarTerritorio from './ui/SidebarTerritorio'
import GaleriaTerritorio from './ui/GaleriaTerritorio'
import ListaFilmesTerritorio from './ui/ListaFilmesTerritorio'
import LinkTerritorio from './ui/LinkTerritorio'

export default function PageTerritorio({ territorio }: { territorio: any }) {
  return (
    <section className="territorio">
      <SidebarTerritorio territorio={territorio} />
      <div className="territorio__content">
        {
          territorio.featuredImage ? (
            <img src={territorio.featuredImage?.node.sourceUrl} alt="" className="territorio__img" />
          ) : ''
        }
        <GaleriaTerritorio
          galeria={[
            territorio.informacoesTerritorio?.imagem1?.sourceUrl,
            territorio.informacoesTerritorio?.imagem2?.sourceUrl,
            territorio.informacoesTerritorio?.imagem3?.sourceUrl,
            territorio.informacoesTerritorio?.imagem4?.sourceUrl,
            territorio.informacoesTerritorio?.imagem5?.sourceUrl,
            territorio.informacoesTerritorio?.imagem6?.sourceUrl,
            territorio.informacoesTerritorio?.imagem7?.sourceUrl,
          ].filter(Boolean)}
        />
        <ListaFilmesTerritorio filmes={territorio.informacoesTerritorio?.filmes} />
        <LinkTerritorio territorio={territorio} />
      </div>
    </section>
  )
}
