"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Grafismo from "./ui/Grafismo";
import Lupa from "./ui/Lupa";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = pathname === "/";

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
      <header className={`header ${isHome && !isScrolled ? "header--home" : "header--compact"}`}>
          <div className="header__up biz">
            <p>Realização MLB - Movimento de Luta nos Bairros, Vilas e Favelas</p>
            <Grafismo inverted />
          </div>
          <div className="header__content">
            <Grafismo />
            <div className="header__logo archivo">
              <p>{`MOSTRA LONA ${isHome && isScrolled ? '– CINEMAS E TERRITÓRIOS' : ''}`}</p>
            </div>
            <nav className="header__anchor-nav biz">
                <ul>
                  <li>Programação</li>
                  <li>Mostras</li>
                  <li>Formação</li>
                  <li>Sobre</li>
                </ul>
            </nav>
            <div className="header__btn-box">
              <button className="header__search-btn">
                <Lupa />
              </button>
              <button className={`header__menu-btn ${isMenuOpen ? "is-open" : ""}`} onClick={toggleMenu}>
                <span>&nbsp;</span>
              </button>
            </div>
          </div>   
          <div className="header__footer archivo">
            <Grafismo />
            <p>CINEMAS E TERRITÓRIOS</p>
          </div>
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
              <li>A Lona ←</li>
              <li>Programação Geral ←</li>
              <li>Sessões Territoriais ←</li>
              <p className="group">MOSTRAS</p>
              <li>Atravessamentos ←</li>
              <li>Acervo ←</li>
              <li>Homenagem ←</li>
              <li>Especial ←</li>
              <p className="group">FORMAÇÃO</p>
              <li>Publicações ←</li>
              <li>Oficinas ←</li>
              <li>Podcast ←</li>
              <li>Ciclo de Conversas ←</li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}