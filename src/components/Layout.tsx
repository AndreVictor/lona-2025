"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getCategoryClass = () => {
    if (pathname.includes("/mostras/atravessamentos")) return "categoria-atravessamentos";
    if (pathname.includes("/mostras/homenagem")) return "categoria-homenagem";
    if (pathname.includes("/mostras/especial")) return "categoria-especial";
    if (pathname.includes("/acervo")) return "categoria-acervo";
    if (pathname.includes("/territoriais")) return "categoria-territoriais";
    if (pathname.includes("/formacao")) return "categoria-formacao";
    if (pathname.includes("/a-lona")) return "categoria-a-lona";
    return "categoria-default";
  };

  return (
    <>
      <Header />
      <main className={`${!isHome ? "main--internas" : ""} ${getCategoryClass()}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}