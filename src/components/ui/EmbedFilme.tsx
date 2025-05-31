import React from 'react'

export default function EmbedFilme({ embedUrl, fallbackImage }: { embedUrl: string, fallbackImage: string }) {
  return (
    <div className="pageSessao__embed-box">
      {embedUrl ? (
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <img src={fallbackImage} alt="Imagem da sessão" />
      )}
    </div>
  )
}
