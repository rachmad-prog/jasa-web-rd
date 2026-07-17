import { useLanguage } from "../i18n/useLanguage.js";

export default function Proses() {
  const { t } = useLanguage();
  const p = t.proses;

  return (
    <section id="proses">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2>{p.heading}</h2>
          <p>{p.desc}</p>
        </div>
        <div className="process-grid">
          {p.steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
