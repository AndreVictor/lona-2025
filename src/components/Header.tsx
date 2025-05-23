"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Grafismo from "./ui/Grafismo";
import Lupa from "./ui/Lupa";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Classe da categoria dinâmica
  const getCategoryClass = () => {
    if (pathname.includes("/mostras/atravessamentos")) return "categoria-atravessamentos";
    if (pathname.includes("/mostras/homenagem")) return "categoria-homenagem";
    if (pathname.includes("/mostras/especial")) return "categoria-especial";
    if (pathname.includes("/mostras/acervo")) return "categoria-acervo";
    if (pathname.includes("/territoriais")) return "categoria-territoriais";
    if (pathname.includes("/formacao")) return "categoria-formacao";
    return "categoria-default";
  };

  return (
    <>
      <header className={`header ${hydrated && isHome && !isScrolled && !isMobile ? "header--home" : "header--compact"} ${getCategoryClass()}`}>
          <div className="header__up biz">
            <p>Realização MLB - Movimento de Luta nos Bairros, Vilas e Favelas</p>
            <Grafismo inverted />
          </div>
          <div className="header__content">
            <Grafismo />
            <div className="header__logo archivo">
              <Link href="/">
                <p>{`MOSTRA LONA ${!isMobile && (!isHome || isScrolled) ? '– CINEMAS E TERRITÓRIOS' : ''}`}</p>
              </Link>
            </div>
            {!isMobile && (
              <nav className="header__anchor-nav biz">
                <ul>
                  <li><a href="#programacao">Programação</a></li>
                  <li><a href="#mostras">Mostras</a></li>
                  <li><a href="#formacao">Formação</a></li>
                  <li><a href="#sobre">Sobre</a></li>
                </ul>
              </nav>
            )}
            <div className="header__btn-box">
              <button className="header__search-btn">
                <Lupa />
              </button>
              <button className={`header__menu-btn ${isMenuOpen ? "is-open" : ""}`} onClick={toggleMenu}>
                <span>&nbsp;</span>
              </button>
            </div>
          </div>
          {!isMobile && (
            <div className="header__footer archivo">
              <Grafismo />
              <p>CINEMAS E TERRITÓRIOS</p>
            </div>
          )}
          {(
          <nav className={`header__menu biz ${isMenuOpen ? "is-open" : ""}`}>
            <button
              className="header__menu-btn is-open"
              onClick={toggleMenu}
              style={{
                position: "absolute",
                top: isScrolled ? "2rem" : "8rem",
                right: "4rem",
                zIndex: 1000000,
                width: "4rem",
                height: "4rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span>&nbsp;</span>
            </button>
            <Grafismo inverted />
            <ul>
              <li><Link href="/a-lona" onClick={() => setIsMenuOpen(false)}>A Lona ←</Link></li>
              <li><Link href="/programacao-geral" onClick={() => setIsMenuOpen(false)}>Programação Geral ←</Link></li>
              <li><Link href="/territoriais" onClick={() => setIsMenuOpen(false)}>Sessões Territoriais ←</Link></li>
              <p className="group">MOSTRAS</p>
              <li><Link href="/mostras/atravessamentos" onClick={() => setIsMenuOpen(false)}>Atravessamentos ←</Link></li>
              <li><Link href="/mostras/acervo" onClick={() => setIsMenuOpen(false)}>Acervo ←</Link></li>
              <li><Link href="/mostras/homenagem" onClick={() => setIsMenuOpen(false)}>Homenagem ←</Link></li>
              <li><Link href="/mostras/especial" onClick={() => setIsMenuOpen(false)}>Especial ←</Link></li>
              <p className="group">FORMAÇÃO</p>
              <li><Link href="/formacao/publicacoes" onClick={() => setIsMenuOpen(false)}>Publicações ←</Link></li>
              <li><Link href="/formacao/oficinas" onClick={() => setIsMenuOpen(false)}>Oficinas ←</Link></li>
              <li><Link href="/formacao/podcast" onClick={() => setIsMenuOpen(false)}>Podcast ←</Link></li>
              <li><Link href="/formacao/conversas" onClick={() => setIsMenuOpen(false)}>Ciclo de Conversas ←</Link></li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}