import { useLanguage } from "../i18n/useLanguage.js";
import TerminalTyper from "./TerminalTyper.jsx";

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2Pre}
            <em>{t.hero.titleLine2Em}</em>
            {t.hero.titleLine2Post}
            <br />
            {t.hero.titleLine3}
          </h1>
          <p>{t.hero.desc}</p>
          <div className="hero-actions">
            <a href="#kontak" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#portofolio" className="btn btn-ghost">
              {t.hero.ctaGhost}
            </a>
          </div>
          <div className="hero-tags">
            <span className="tag">
              <b>{t.hero.tagWebsite}</b> {t.hero.tagWebsiteDesc}
            </span>
            <span className="tag">
              <b>{t.hero.tagCode}</b> {t.hero.tagCodeDesc}
            </span>
          </div>
        </div>

        <TerminalTyper
          key={lang}
          codeLines={t.hero.codeLines}
          title={t.hero.terminalTitle}
          pills={t.hero.pills}
        />
      </div>
    </section>
  );
}
