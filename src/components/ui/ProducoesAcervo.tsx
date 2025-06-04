import React from 'react'

export default function ProducoesAcervo({ premiacoes }: { premiacoes: (string | null | undefined)[] }) {
  return (
    <ul className="listaConversasAcervo__lista">
      {premiacoes.map((premio, index) =>
        premio ? <li key={index}>{premio}</li> : null
      )}
    </ul>
  )
}
