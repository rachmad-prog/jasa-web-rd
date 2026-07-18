import { useState } from "react";
import { useLanguage } from "../i18n/useLanguage.js";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header>
      <div className="wrap">
        <nav>
          <a className="logo" href="#top">
            Agency<span>Advagrow</span>
          </a>
          <ul className="nav-links">
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
          <div className="nav-cta">
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}>
                EN
              </button>
              <button
                type="button"
                className={lang === "id" ? "active" : ""}
                onClick={() => setLang("id")}>
                ID
              </button>
            </div>
            <a
              href="#kontak"
              className="btn btn-primary"
              style={{ padding: "10px 20px", fontSize: "13.5px" }}>
              {t.nav.cta}
            </a>
            <button
              className="burger"
              aria-label={t.nav.openMenu}
              onClick={() => setNavOpen((v) => !v)}>
              ☰
            </button>
            {navOpen && (
              <div className="mobile-menu">
                <a href="#layanan" onClick={() => setNavOpen(false)}>
                  {t.nav.layanan}
                </a>
                <a href="#proses" onClick={() => setNavOpen(false)}>
                  {t.nav.proses}
                </a>
                <a href="#portofolio" onClick={() => setNavOpen(false)}>
                  {t.nav.portofolio}
                </a>
                <a href="#kontak" onClick={() => setNavOpen(false)}>
                  {t.nav.kontak}
                </a>
                <div className="lang-switch lang-switch-mobile">
                  <button
                    type="button"
                    className={lang === "en" ? "active" : ""}
                    onClick={() => setLang("en")}>
                    EN
                  </button>
                  <button
                    type="button"
                    className={lang === "id" ? "active" : ""}
                    onClick={() => setLang("id")}>
                    ID
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
