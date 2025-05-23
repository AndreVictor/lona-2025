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

  return (
    <>
      <header className={`header ${hydrated && isHome && !isScrolled && !isMobile ? "header--home" : "header--compact"}`}>
          <div className="header__up biz">
            <p>Realização MLB - Movimento de Luta nos Bairros, Vilas e Favelas</p>
            <Grafismo inverted />
          </div>
          <div className="header__content">
            <Grafismo />
            <div className="header__logo archivo">
              <p>{`MOSTRA LONA ${!isMobile && isHome && isScrolled ? '– CINEMAS E TERRITÓRIOS' : ''}`}</p>
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
              <li><Link href="/a-lona">A Lona ←</Link></li>
              <li><Link href="/programacao-geral">Programação Geral ←</Link></li>
              <li><Link href="/territoriais">Sessões Territoriais ←</Link></li>
              <p className="group">MOSTRAS</p>
              <li><Link href="/mostras/atravessamentos">Atravessamentos ←</Link></li>
              <li><Link href="/mostras/acervo">Acervo ←</Link></li>
              <li><Link href="/mostras/homenagem">Homenagem ←</Link></li>
              <li><Link href="/mostras/especial">Especial ←</Link></li>
              <p className="group">FORMAÇÃO</p>
              <li><Link href="/formacao/publicacoes">Publicações ←</Link></li>
              <li><Link href="/formacao/oficinas">Oficinas ←</Link></li>
              <li><Link href="/formacao/podcast">Podcast ←</Link></li>
              <li><Link href="/formacao/conversas">Ciclo de Conversas ←</Link></li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}