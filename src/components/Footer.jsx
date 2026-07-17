import { useLanguage } from "../i18n/useLanguage.js";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <a className="logo" href="#top">
            Agency<span>/</span>Advagrow
          </a>
          <ul className="footer-links">
            <li>
              <a href="#layanan">{t.nav.layanan}</a>
            </li>
            <li>
              <a href="#proses">{t.nav.proses}</a>
            </li>
            <li>
              <a href="#portofolio">{t.nav.portofolio}</a>
            </li>
            <li>
              <a href="#kontak">{t.nav.kontak}</a>
            </li>
          </ul>
          <div className="footer-social">
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              X / Twitter
            </a> */}
            <a
              href="https://www.linkedin.com/in/rachmadinata-r/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              href="https://github.com/rachmad-prog"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Agency Advagrow — Jasa Website App
          Developer. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
