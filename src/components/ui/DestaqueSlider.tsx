"use client";
import React from "react";
import DestaqueCard from "./DestaqueCard";
import HeaderSessao from "./HeaderSessao";

type DestaqueSliderProps = {
  sessoes: any[];
  nomeMostra: string;
};

export default function DestaqueSlider({ sessoes, nomeMostra }: DestaqueSliderProps) {
  const todasSessoes = sessoes.flat();
  const agora = new Date();
  const sessoesFuturas = todasSessoes.filter((sessao: any) => {
    const data = new Date(sessao.informacoesSessao.dataInicial);
    return data >= agora;
  });
  const sessoesOrdenadas = sessoesFuturas.sort((a: any, b: any) => {
    return new Date(a.informacoesSessao.dataInicial).getTime() - new Date(b.informacoesSessao.dataInicial).getTime();
  });
  const proximaSessao = sessoesOrdenadas[0];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? proximaSessao?.informacoesSessao?.filmes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === proximaSessao?.informacoesSessao?.filmes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBulletClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="destaqueSlider" id="destaque">
      <HeaderSessao
        nome="Próximas exibições"
        font="biz"
      />
      <div className="destaqueSlider__slider">
        <div className="destaqueSlider__slider-inner" style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
          transition: "transform 0.3s ease-in-out"
        }}>
          {proximaSessao?.informacoesSessao?.filmes.map((filme: any, index: number) => (
            <DestaqueCard
              key={index}
              imagem={filme.featuredImage?.node?.sourceUrl || ""}
              sessao={proximaSessao.title}
              titulo={filme.title}
              direcao={filme.informacoesFilmes?.fichaTecMini || ""}
              data={new Date(proximaSessao.informacoesSessao.dataInicial).toLocaleDateString("pt-BR")}
              local={proximaSessao.informacoesSessao.local}
              link={`/mostras/${nomeMostra}/sessao/${proximaSessao.slug}`}
            />
          ))}
        </div>
        <div className="destaqueSlider__control">
          <div className="destaqueSlider__bullet-box">
            {proximaSessao?.informacoesSessao?.filmes.map((_: any, index: number) => (
              <span
                key={index}
                className={`destaqueSlider__control-bullet ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleBulletClick(index)}
              >
                &nbsp;
              </span>
            ))}
          </div>
          <div className="destaqueSlider__arrow-box">
              <button onClick={handlePrev} className="destaqueSlider__arrow destaqueSlider__arrow--left biz">
                  →
              </button>
              <button onClick={handleNext} className="destaqueSlider__arrow destaqueSlider__arrow--right biz">
                  →
              </button>
          </div>
      </div>    
      </div>
    </section>
  );
}