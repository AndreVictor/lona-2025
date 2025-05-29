"use client";

import React from "react";
import CardSessao from "./CardSessao";

type ListaSessaoProps = {
  sessoes: any[];
  nomeMostra: string;
};

export default function ListaSessao({ sessoes, nomeMostra }: ListaSessaoProps) {
  return (
    <section className="listaSessao" id="sessoes">
      {sessoes.map((sessao, index) => {
        const info = sessao.informacoesSessao || sessao.informacoesMostraAcervo;
        const filmes = info?.filmes?.map(
          (filme: any) => filme.title
        );

        return (
          <CardSessao
            key={index}
            imagem={sessao.featuredImage?.node?.sourceUrl || "/img/grafismo.png"}
            sessao={sessao.title}
            filmes={filmes || []}
            local={info?.local || ""}
            data={info?.dataInicial || ""}
            link={`/mostras/${nomeMostra}/sessao/${sessao.slug}`}
          />
        );
      })}
    </section>
  );
}
