import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "../i18n/useLanguage.js";

const rawCategories = [...new Set(projects.map((p) => p.cat))];

export default function Portofolio() {
  const { lang, t } = useLanguage();
  const p = t.portofolio;
  const categories = [p.filterAll, ...rawCategories];

  const [activeFilter, setActiveFilter] = useState(p.filterAll);

  // Keep the filter valid when the "All" label changes with the language.
  const isAllSelected = !rawCategories.includes(activeFilter);
  const effectiveFilter = isAllSelected ? p.filterAll : activeFilter;

  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = projects.filter(
    (proj) => isAllSelected || proj.cat === effectiveFilter,
  );

  return (
    <section id="portofolio">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{p.eyebrow}</span>
          <h2>{p.heading}</h2>
          <p>{p.desc}</p>
        </div>
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${effectiveFilter === c ? "active" : ""}`}
              onClick={() => setActiveFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredProjects.map((proj, i) => (
            <div className="p-card" key={i}>
              <div className="p-thumb" onClick={() => setModalProject(proj)}>
                <img src={proj.image} alt={proj.title} loading="lazy" />
              </div>
              <div className="p-body">
                <div className="p-cat">{proj.category[lang]}</div>
                <h4>{proj.title}</h4>
                <p>{proj.desc[lang]}</p>
                <button
                  type="button"
                  className="btn btn-ghost p-view-btn"
                  onClick={() => setModalProject(proj)}>
                  {p.viewProject}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
