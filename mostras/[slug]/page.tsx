import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}


export async function generateStaticParams() {
    return [
      { slug: "atravessamentos" },
      { slug: "acervo" },
      { slug: "homenagem" },
      { slug: "especial" },
    ];
  }