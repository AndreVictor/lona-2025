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
    const info = sessao.informacoesSessao || sessao.informacoesMostraAcervo;
    const data = new Date(info?.dataInicial);
    return data >= agora;
  });
  const sessoesOrdenadas = sessoesFuturas.sort((a: any, b: any) => {
    const infoA = a.informacoesSessao || a.informacoesMostraAcervo;
    const infoB = b.informacoesSessao || b.informacoesMostraAcervo;
    return new Date(infoA?.dataInicial).getTime() - new Date(infoB?.dataInicial).getTime();
  });
  const proximaSessao = sessoesOrdenadas[0];
  const info = proximaSessao?.informacoesSessao || proximaSessao?.informacoesMostraAcervo;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? info?.filmes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === info?.filmes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBulletClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!info?.filmes?.length) return null;

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
          {info?.filmes.map((filme: any, index: number) => (
            <DestaqueCard
              key={index}
              imagem={filme.featuredImage?.node?.sourceUrl || "/img/grafismo.png"}
              sessao={proximaSessao.title}
              titulo={filme.title}
              direcao={filme.informacoesFilmes?.fichaTecMini || ""}
              data={new Date(info.dataInicial).toLocaleDateString("pt-BR")}
              local={info.local}
              link={`/mostras/${nomeMostra}/sessao/${proximaSessao.slug}`}
            />
          ))}
        </div>
        <div className="destaqueSlider__control">
          <div className="destaqueSlider__bullet-box">
            {info?.filmes.map((_: any, index: number) => (
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