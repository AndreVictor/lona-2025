'use client';
import React from 'react'
import { useEffect } from 'react';
import SidebarTerritoriais from './ui/SidebarTerritoriais'
import ListaTerritoriais from './ui/ListaTerritoriais'

interface PageTerritoriaisProps {
  territoriais: {
    slug: string;
    title: string;
    content: string;
    informacoesTerritoriais: {
      datainicial: string;
      localizacao: string;
      localizacaoPrecisa: string;
      filmes: any[];
      imagem1?: { sourceUrl: string };
      imagem2?: { sourceUrl: string };
      imagem3?: { sourceUrl: string };
      imagem4?: { sourceUrl: string };
      imagem5?: { sourceUrl: string };
      imagem6?: { sourceUrl: string };
      imagem7?: { sourceUrl: string };
      imagem8?: { sourceUrl: string };
      imagem9?: { sourceUrl: string };
      imagem10?: { sourceUrl: string };
      parceiro1?: { sourceUrl: string };
      parceiro2?: { sourceUrl: string };
      parceiro3?: { sourceUrl: string };
      parceiro4?: { sourceUrl: string };
    };
  }[];
  content: string;
}

export default function PageTerritoriais({ territoriais, content }: PageTerritoriaisProps) {
  const anchorLinks = territoriais.map((t) => ({ title: t.title, slug: t.slug }))

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <section className="territoriais">
      <SidebarTerritoriais 
        titulo="Sessões Territoriais"
        descricao={content}
        anchorLinks={anchorLinks}
      />
      <div className="territoriais__content">
        <ListaTerritoriais territoriais={territoriais} />
      </div>
    </section>
  )
}
