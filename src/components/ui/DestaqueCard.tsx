import React from 'react'

export default function DestaqueCard() {
  return (
    <div className="destaqueSlider__card">
        <img src="https://2022wp.mostra-lona.com.br/wp-content/uploads/2022/06/adeus_capitao_doc_tita_vincentcarelli01-18430403-768x432.jpeg" alt="" className="destaqueSlider__card-img" />
        <div className="destaqueSlider__card-info">
            <p className="destaqueSlider__card-sessao biz uppercase">
                Sessão 1
            </p>
            <h2 className="destaqueSlider__card-title archivo condensed uppercase">
                Nũhũ yãg mũ yõg hãm: essa terra é nossa!
            </h2>
            <p className="destaqueSlider__card-tec biz">
                Isael Maxakali, Sueli Maxakali, Carolina Canguçu, 
                Roberto Romero | MG | 70’| 2020
            </p>
        </div>
    </div>
  )
}
