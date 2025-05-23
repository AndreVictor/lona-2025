"use client";
import React from "react";
import Grafismo from "./Grafismo";
import DestaqueCard from "./DestaqueCard";

export default function DestaqueSlider() {
  return (
    <section className="destaqueSlider" id="destaque">
      <header className="destaqueSlider__header">
        <h3 className="destaqueSlider__header--title biz">PRÓXIMA EXIBIÇÃO</h3>
        <h3 className="destaqueSlider__header--data biz">08 maio – 19h</h3>
        <h3 className="destaqueSlider__header--local biz">Ocupação Maria do Arraial</h3>
        <Grafismo inverted />
      </header>
      <div className="destaqueSlider__slider">
        <DestaqueCard 
          imagem="https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/Essa-Terra-1.jpeg"
          sessao="SESSÃO 1"
          titulo="Nũhũ yãg mũ yõg hãm: essa terra é nossa!"
          direcao="Isael Maxakali, Sueli Maxakali, Carolina Canguçu, Roberto Romero | MG | 70' | 2020"
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