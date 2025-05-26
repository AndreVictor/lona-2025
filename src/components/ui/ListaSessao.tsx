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
        const filmes = sessao.informacoesSessao?.filmes?.map(
          (filme: any) => filme.title
        );

        return (
          <CardSessao
            key={index}
            imagem={sessao.featuredImage?.node?.sourceUrl || ""}
            sessao={sessao.title}
            filmes={filmes || []}
            local={sessao.informacoesSessao?.local || ""}
            data={sessao.informacoesSessao?.dataInicial || ""}
            link={`/mostras/${nomeMostra}/sessao/${sessao.slug}`}
          />
        );
      })}
    </section>
  );
}
