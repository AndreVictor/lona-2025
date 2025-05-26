"use client";

import CardFilme from "./CardFilme";
import { formatDate } from "@/utils/formatDate";

type ListaFilmesProps = {
  sessoes: any[];
  nomeMostra: string;
};

export default function ListaFilmes({ sessoes, nomeMostra }: ListaFilmesProps) {
  const filmes = sessoes.flatMap(sessao =>
    sessao.informacoesSessao?.filmes?.map((filme: any) => ({
      imagem: filme.featuredImage?.node?.sourceUrl || "/placeholder.png",
      titulo: filme.title,
      direcao: filme.informacoesFilmes?.fichaTecMini || "",
      sessao: sessao.title,
      data: sessao.informacoesSessao?.dataInicial
        ? formatDate(sessao.informacoesSessao.dataInicial, true)
        : "",
      local: sessao.informacoesSessao?.local || "",
      link: `/mostras/${nomeMostra}/sessao/${sessao.slug}`
    })) || []
  );

  return (
    <section className="listaFilmes" id="filmes">
      {filmes.length > 0 ? (
        filmes.map((filme, index) => (
          <CardFilme
            key={index}
            imagem={filme.imagem}
            sessao={filme.sessao}
            titulo={filme.titulo}
            direcao={filme.direcao}
            local={filme.local}
            data={filme.data}
            link={filme.link}
          />
        ))
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </section>
  );
}