'use client';

import Programacao from "@/components/Programacao";
import { getHome } from "@/utils/getHome";
import Vinheta from "../components/Vinheta";
import Mostras from "@/components/Mostras";
import Formacao from "@/components/Formacao";
import Sobre from "@/components/Sobre";

export default async function Home() {
  const data = await getHome();

  return (
  <>
      <Vinheta />
      <Programacao programacoes={data!.programacoes.nodes} />
      <Mostras mostras={data!.contentMostras} />
      <Formacao />
      <Sobre />
    </>
  );
}