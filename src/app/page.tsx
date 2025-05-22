'use client';

import Programacao from "@/components/Programacao";
import Layout from "../components/Layout";
import Vinheta from "../components/Vinheta";
import Mostras from "@/components/Mostras";
import Formacao from "@/components/Formacao";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <Layout>
      <Vinheta />
      <Programacao />
      <Mostras />
      <Formacao />
      <Sobre />
    </Layout>
  );
}