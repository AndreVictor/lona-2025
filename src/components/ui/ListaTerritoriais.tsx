import React from 'react'
import CardTerritoriaisPage from './CardTerritoriaisPage'

interface TerritoriaisProps {
  territoriais: {
    title: string
    slug: string
    content: string
    informacoesTerritoriais: {
      datainicial: string
      localizacao: string
      localizacaoPrecisa: string
      filmes: any[]
      imagem1?: { sourceUrl: string }
      imagem2?: { sourceUrl: string }
      imagem3?: { sourceUrl: string }
      imagem4?: { sourceUrl: string }
      imagem5?: { sourceUrl: string }
      imagem6?: { sourceUrl: string }
      imagem7?: { sourceUrl: string }
      imagem8?: { sourceUrl: string }
      imagem9?: { sourceUrl: string }
      imagem10?: { sourceUrl: string }
      parceiro1?: { sourceUrl: string }
      parceiro2?: { sourceUrl: string }
      parceiro3?: { sourceUrl: string }
      parceiro4?: { sourceUrl: string }
    }
  }[]
}

export default function ListaTerritoriais({ territoriais }: TerritoriaisProps) {
  return (
    <div className="territoriais__card-box">
      {territoriais.map((territorio) => (
        <CardTerritoriaisPage
          key={territorio.slug}
          title={territorio.title}
          slug={territorio.slug}
          content={territorio.content}
          data={territorio.informacoesTerritoriais.datainicial}
          local={territorio.informacoesTerritoriais.localizacao}
          localPrecisao={territorio.informacoesTerritoriais.localizacaoPrecisa}
          filmes={territorio.informacoesTerritoriais.filmes}
          galeria={
            [
              territorio.informacoesTerritoriais.imagem1?.sourceUrl,
              territorio.informacoesTerritoriais.imagem2?.sourceUrl,
              territorio.informacoesTerritoriais.imagem3?.sourceUrl,
              territorio.informacoesTerritoriais.imagem4?.sourceUrl,
              territorio.informacoesTerritoriais.imagem5?.sourceUrl,
              territorio.informacoesTerritoriais.imagem6?.sourceUrl,
              territorio.informacoesTerritoriais.imagem7?.sourceUrl,
              territorio.informacoesTerritoriais.imagem8?.sourceUrl,
              territorio.informacoesTerritoriais.imagem9?.sourceUrl,
              territorio.informacoesTerritoriais.imagem10?.sourceUrl,
            ].filter((src): src is string => Boolean(src))
          }
          parceiros={
            [
              territorio.informacoesTerritoriais.parceiro1?.sourceUrl,
              territorio.informacoesTerritoriais.parceiro2?.sourceUrl,
              territorio.informacoesTerritoriais.parceiro3?.sourceUrl,
              territorio.informacoesTerritoriais.parceiro4?.sourceUrl,
            ].filter((src): src is string => Boolean(src))
          }
        />
      ))}
    </div>
  )
}
