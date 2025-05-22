import instagram from '../assets/social icon/instagram.svg';
import facebook from '../assets/social icon/facebook.svg';
import youtube from '../assets/social icon/youtube.svg';
import logos from '../assets/logos-desktop-lona-2022.png';
import logosMobile from '../assets/logos-mobile-lona-2022.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__header">
        <p className='archivo condensed uppercase'>© Mostra Lona {new Date().getFullYear()}</p>
        <div className="footer__social-box">
          <a href="https://www.instagram.com/mostralona/" target="_blank" className="footer__social-link">
              <img src={instagram.src} alt="" className="footer__social-icon" />
          </a>
          <a href="https://pt-br.facebook.com/mlbbr" target="_blank" className="footer__social-link">
              <img src={facebook.src} alt="" className="footer__social-icon" />
          </a>
          <a href="https://www.youtube.com/c/V%C3%ADdeosMLB" target="_blank" className="footer__social-link">
              <img src={youtube.src} alt="" className="footer__social-icon" />
          </a>
      </div>
      </div>
      <div className="footer__logos-box">
        <img src={logos.src} alt="Regua de logos da Mostra Lona 2024" className="footer__logos" />
      </div>
    </footer>
  );
}