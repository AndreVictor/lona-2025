import React from 'react'
import HeaderSessao from './HeaderSessao'

export default function FichaTecAcervo({ fichaTecCompleta }: { fichaTecCompleta?: string }) {
  if (!fichaTecCompleta) return null

  return (
    <section className="pageFilmeAcervo__ficha-tec-section">
      <HeaderSessao nome="Ficha Técnica Completa" font="biz" />
      <div
        className="pageFilmeAcervo__ficha-tec"
        dangerouslySetInnerHTML={{ __html: fichaTecCompleta }}
      />
    </section>
  )
}
