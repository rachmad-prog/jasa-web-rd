import { useState } from "react";
import { useLanguage } from "../i18n/useLanguage.js";

export default function Layanan() {
  const [activeTab, setActiveTab] = useState("web");
  const { t } = useLanguage();
  const l = t.layanan;
  const active = activeTab === "web" ? l.web : l.android;

  return (
    <section id="layanan">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{l.eyebrow}</span>
          <h2>{l.heading}</h2>
        </div>

        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setActiveTab("web")}>
            {l.tabWebsite}
          </button>
          {/* <button
            className={`tab-btn ${activeTab === "android" ? "active" : ""}`}
            onClick={() => setActiveTab("android")}>
            {l.tabAndroid}
          </button> */}
        </div>

        {activeTab === "web" ? (
          <div className="tab-panel">
            <div className="service-copy">
              <h3>{active.h3}</h3>
              <p>{active.p}</p>
              <ul className="feature-list">
                {active.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="mini-terminal">
              <span className="kw">function</span>{" "}
              <span className="fn">calculateTotal</span>(items) {"{"}
              <br />
              &nbsp;&nbsp;<span className="kw">return</span> items.reduce((a,
              b) =&gt; a + b.price, 0);
              <br />
              {"}"}
              <br />
              <br />
              <span className="kw">{active.terminalComment}</span>
            </div>
          </div>
        ) : (
          <div className="tab-panel">
            <div className="service-copy">
              <h3>{active.h3}</h3>
              <p>{active.p}</p>
              <ul className="feature-list">
                {active.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="mini-terminal">
              <span className="kw">while</span> (project.active) {"{"}
              <br />
              &nbsp;&nbsp;support.<span className="fn">help</span>(you);
              <br />
              {"}"}
              <br />
              <br />
              <span className="kw">{active.terminalComment}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
