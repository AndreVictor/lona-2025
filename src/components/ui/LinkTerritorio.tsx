import React from 'react'

export default function LinkTerritorio({ territorio }: { territorio: any }) {
  const informacoes = territorio.informacoesTerritorio

  const links = [
    { texto: informacoes?.texto1, url: informacoes?.linkTexto1 },
    { texto: informacoes?.texto2, url: informacoes?.linkTexto2 },
    { texto: informacoes?.texto3, url: informacoes?.linkTexto3 },
    { texto: informacoes?.texto4, url: informacoes?.linkTexto4 },
    { texto: informacoes?.texto5, url: informacoes?.linkTexto5 },
  ].filter(link => link.texto && link.url)

  return (
    <div className="territorio__links">
      {links.map((link, i) => (
        <p key={i}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.texto}
          </a>
        </p>
      ))}
    </div>
  )
}
