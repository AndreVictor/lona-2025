import React from 'react'
import SidebarFilmeAcervo from './ui/SidebarFilmeAcervo'
import EmbedFilmeAcervo from './ui/EmbedFilmeAcervo'
import FichaTecAcervo from './ui/FichaTecAcervo'
import GaleriaAcervo from './ui/GaleriaAcervo'
import ListaTerritorioFilmeAcervo from './ui/ListaTerritorioFilmeAcervo'
import ListaConversasAcervo from './ui/ListaConversasAcervo'
import ListaProducoesAcervo from './ui/ListaProducoesAcervo'

export default function PageFilmeAcervo({ filme }: { filme: any }) {
  const infos = filme?.informacoesAcervo
  return (
    <section className="pageFilmeAcervo">
        <SidebarFilmeAcervo 
            titulo={filme?.title}
            fichaTecMini={infos?.fichaTecMini}
            sinopse={filme?.content}
        />
        <div className="pageFilmeAcervo__content">
            <EmbedFilmeAcervo embedHtml={infos?.embed} fallbackImage={filme.featuredImage?.node.sourceUrl} />
            <FichaTecAcervo fichaTecCompleta={infos?.fichaTecCompleta} />
            <GaleriaAcervo galeria={[
              infos?.cartaz?.sourceUrl,
              infos?.imagem1?.sourceUrl,
              infos?.imagem2?.sourceUrl,
              infos?.imagem3?.sourceUrl,
              infos?.imagem4?.sourceUrl,
              infos?.imagem5?.sourceUrl,
              infos?.imagem6?.sourceUrl,
              infos?.imagem7?.sourceUrl,
            ]} />
            <ListaTerritorioFilmeAcervo territorios={infos?.territorio} />
            <ListaConversasAcervo 
              embed1={infos?.nossaLutaNossoAcervoEmbed1}
              embed2={infos?.nossaLutaNossoAcervoEmbed2}
              titulo1={infos?.nossaLutaNossoAcervoTituloEmbed1}
              titulo2={infos?.nossaLutaNossoAcervoTituloEmbed2}
              texto1={infos?.nossaLutaNossoAcervoTexto1}
              texto2={infos?.nossaLutaNossoAcervoTexto2}
            />
            <ListaProducoesAcervo 
              premiacoes={[
                infos?.premiacao1,
                infos?.premiacao2,
                infos?.premiacao3,
                infos?.premiacao4,
                infos?.premiacao5,
              ]}
            />
        </div>
    </section>
  )
}
