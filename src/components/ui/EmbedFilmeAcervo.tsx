import React from 'react'

export default function EmbedFilmeAcervo({ embedHtml, fallbackImage }: { embedHtml: string, fallbackImage: string }) {
  const podeExibirEmbed = !!embedHtml

  return (
    <div className="pageSessao__embed-box">
      {podeExibirEmbed ? (
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      ) : (
        <img src={fallbackImage} alt="Imagem do filme" className='pageSessao__embed-img' />
      )}
    </div>
  )
}
