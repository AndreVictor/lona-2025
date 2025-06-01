import React from 'react'

export default function EmbedFilme({ embedHtml, fallbackImage, dataFinal }: { embedHtml: string, fallbackImage: string, dataFinal?: string }) {
  const hoje = new Date()
  const dataFinalObj = dataFinal ? new Date(dataFinal) : null
  const podeExibirEmbed = embedHtml && (!dataFinalObj || hoje <= dataFinalObj)

  return (
    <div className="pageSessao__embed-box">
      {podeExibirEmbed ? (
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      ) : (
        <img src={fallbackImage} alt="Imagem da sessão" />
      )}
    </div>
  )
}
