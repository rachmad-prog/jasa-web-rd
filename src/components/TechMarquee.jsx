import { techs } from "../data/techs";
import { useLanguage } from "../i18n/useLanguage.js";

export default function TechMarquee() {
  const { t } = useLanguage();

  return (
    <section style={{ padding: 0 }}>
      <div className="wrap" style={{ padding: "44px 24px 0" }}>
        <span className="eyebrow">{t.tech.eyebrow}</span>
        <h2 style={{ fontSize: 22, marginBottom: 24 }}>{t.tech.heading}</h2>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...techs, ...techs].map((tech, i) => (
            <span key={i}>{i % 2 === 0 ? <b>{tech}</b> : tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
