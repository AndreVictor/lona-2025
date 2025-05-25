"use client";
import React from "react";
import Grafismo from "./Grafismo";
import DestaqueCard from "./DestaqueCard";
import HeaderSessao from "./HeaderSessao";

export default function DestaqueSlider() {
  return (
    <section className="destaqueSlider" id="destaque">
      <HeaderSessao
        nome="Próximas exibições"
        font="biz"
      />
      <div className="destaqueSlider__slider">
        <DestaqueCard 
          imagem="https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/Essa-Terra-1.jpeg"
          sessao="SESSÃO 1"
          titulo="Nũhũ yãg mũ yõg hãm: essa terra é nossa!"
          direcao="Isael Maxakali, Sueli Maxakali, Roberto Romero | MG | 70' | 2020"
          data='08 maio – 19h'
          local='Ocupação Maria do Arraial'
        />
        <div className="destaqueSlider__control">
          <div className="destaqueSlider__bullet-box">
              <span className="destaqueSlider__control-bullet">&nbsp;</span>
              <span className="destaqueSlider__control-bullet">&nbsp;</span>
              <span className="destaqueSlider__control-bullet">&nbsp;</span>
              <span className="destaqueSlider__control-bullet">&nbsp;</span>
          </div>
          <div className="destaqueSlider__arrow-box">
              <button className="destaqueSlider__arrow destaqueSlider__arrow--left biz">
                  →
              </button>
              <button className="destaqueSlider__arrow destaqueSlider__arrow--right biz">
                  →
              </button>
          </div>
      </div>    
      </div>
    </section>
  );
}