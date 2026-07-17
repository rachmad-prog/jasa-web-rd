import { useLanguage } from "../i18n/useLanguage.js";

export default function ProjectModal({ project, onClose }) {
  const { lang, t } = useLanguage();
  const m = t.modal;

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}>
      <div className="modal">
        <button className="modal-close" aria-label={m.close} onClick={onClose}>
          ✕
        </button>

        <div className="modal-thumb">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="p-cat">{project.category[lang]}</div>
        <h3>{project.title}</h3>
        <p>{project.desc[lang]}</p>

        {project.tech && project.tech.length > 0 && (
          <ul className="p-tech">
            {project.tech.map((tItem, i) => (
              <li key={i}>{tItem}</li>
            ))}
          </ul>
        )}

        <div className="modal-actions">
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary">
              {m.viewProject}
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost">
              {m.viewCode}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
