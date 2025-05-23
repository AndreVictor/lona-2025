import DestaqueSlider from "@/components/ui/DestaqueSlider";
import ListaSessao from "@/components/ui/ListaSessao";
import MenuFiltrosMostra from "@/components/ui/MenuFiltrosMostra";
import SidebarMostra from "@/components/ui/SidebarMostra";
import React from "react";

export default function Page() {
  return (
    <div className="mostra">
      <div className="mostra__sidebar">
        <SidebarMostra 
          mostra="mostra atravessamentos"
          descricao="Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante.Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante. Descrição da mostra atravessamentos. Aqui vai um texto que apresenta o conceito da mostra ou qualquer outra informação relevante." 
        />
      </div>
      <div className="mostra__content">
        <DestaqueSlider /> 
        <MenuFiltrosMostra />
        <ListaSessao />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "atravessamentos" },
    { slug: "acervo" },
    { slug: "homenagem" },
    { slug: "especial" },
  ];
}