'use client';

import CardProg from './ui/CardProg';
import HeaderSessao from './ui/HeaderSessao';

export default function Programacao() {
  const handlePrev = () => {
    const container = document.querySelector('.home__programacao-card-box');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  const handleNext = () => {
    const container = document.querySelector('.home__programacao-card-box');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="programacao" className="home__programacao">
      <HeaderSessao
        nome="Programação"
        comArrows
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <div className="home__programacao-card-box">
        <CardProg
          categoria="MOSTRA ATRAVESSAMENTOS"
          filme="ADEUS, CAPITÃO"
          direcao="Vincent Carelli"
          data="08 maio - 19h"
          local="Ocupação Maria do Arraial"
          imagem='https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg'
        />
        <CardProg
          categoria="MOSTRA ATRAVESSAMENTOS"
          filme="ADEUS, CAPITÃO"
          direcao="Vincent Carelli"
          data="08 maio - 19h"
          local="Ocupação Maria do Arraial"
          imagem='https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg'
        />
        <CardProg
          categoria="MOSTRA ATRAVESSAMENTOS"
          filme="ADEUS, CAPITÃO"
          direcao="Vincent Carelli"
          data="08 maio - 19h"
          local="Ocupação Maria do Arraial"
          imagem='https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg'
        />
        <CardProg
          categoria="MOSTRA ATRAVESSAMENTOS"
          filme="ADEUS, CAPITÃO"
          direcao="Vincent Carelli"
          data="08 maio - 19h"
          local="Ocupação Maria do Arraial"
          imagem='https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg'
        />
        <CardProg
          categoria="MOSTRA ATRAVESSAMENTOS"
          filme="ADEUS, CAPITÃO"
          direcao="Vincent Carelli"
          data="08 maio - 19h"
          local="Ocupação Maria do Arraial"
          imagem='https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg'
        />
        <CardProg
          categoria="MOSTRA ATRAVESSAMENTOS"
          filme="ADEUS, CAPITÃO"
          direcao="Vincent Carelli"
          data="08 maio - 19h"
          local="Ocupação Maria do Arraial"
          imagem='https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg'
        />
        <CardProg
          categoria="MOSTRA ATRAVESSAMENTOS"
          filme="ADEUS, CAPITÃO"
          direcao="Vincent Carelli"
          data="08 maio - 19h"
          local="Ocupação Maria do Arraial"
          imagem='https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg'
        />
      </div>
    </section>

  );
}