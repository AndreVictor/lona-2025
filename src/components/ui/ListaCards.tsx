"use client";
import React from "react";

export default function ListaCards() {
  return (
    <section className="listaCards" id="sessões">
      <h2 className="listaCards__title">Sessões</h2>
      <div className="listaCards__grid">
        <div className="listaCards__card">Card Sessão 1</div>
        <div className="listaCards__card">Card Sessão 2</div>
        <div className="listaCards__card">Card Sessão 3</div>
        <div className="listaCards__card">Card Sessão 4</div>
      </div>
    </section>
  );
}