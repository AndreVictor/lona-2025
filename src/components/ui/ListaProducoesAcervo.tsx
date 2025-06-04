import React from 'react'
import HeaderSessao from './HeaderSessao'
import ProducoesAcervo from './ProducoesAcervo'

export default function ListaProducoesAcervo({ premiacoes }: { premiacoes: (string | null | undefined)[] }) {
  if (!premiacoes?.some(p => p)) return null

  return (
    <section className="pageFilmeAcervo__producoes">
      <HeaderSessao nome='Produções' font='biz' />
      <div className="pageFilmeAcervo__producoes-box">
        <ProducoesAcervo premiacoes={premiacoes} />
      </div>
    </section>
  )
}
