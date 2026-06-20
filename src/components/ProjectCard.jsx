// ProjectCard.jsx
// Uso: <ProjectCard project={projects[0]} />

import { useState } from "react";

// ── Iconos inline (sin dependencia extra) ──────────────────────────────────

const IconGithub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconExternal = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── Status badge ───────────────────────────────────────────────────────────

const statusStyles = {
  Completado:  "bg-emerald-950 text-emerald-400 border-emerald-800",
  "En desarrollo": "bg-amber-950 text-amber-400 border-amber-800",
  Publicado:   "bg-sky-950 text-sky-400 border-sky-800",
  Archivado:   "bg-gray-900 text-gray-500 border-gray-700",
};

function StatusBadge({ status }) {
  const style = statusStyles[status] ?? statusStyles["Archivado"];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${style}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

// ── Tech tag ───────────────────────────────────────────────────────────────

function Tag({ label }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-gray-900 text-gray-400 border border-gray-800 transition-colors duration-200 group-hover:border-red-900 group-hover:text-gray-300">
      {label}
    </span>
  );
}

// ── Link button ────────────────────────────────────────────────────────────

function LinkButton({ href, icon, label }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 border border-gray-800 hover:text-red-400 hover:border-red-500 hover:bg-red-950/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
      aria-label={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

// ── ProjectCard ────────────────────────────────────────────────────────────

/**
 * @param {{ project: import("./portfolioData").projects[number] }} props
 */
export default function ProjectCard({ project }) {
  const {
    title,
    description,
    tags = [],
    github,
    demo,
    status,
    highlight,
  } = project;

  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative flex flex-col gap-4 p-6 rounded-xl
        border bg-gray-950 text-gray-300
        transition-all duration-300 ease-out
        ${hovered ? "border-red-500/60 shadow-[0_0_0_1px_rgba(239,68,68,0.15),0_8px_32px_rgba(239,68,68,0.08)]" : "border-gray-800 shadow-none"}
        ${highlight ? "ring-1 ring-red-500/20" : ""}
      `}
    >
      {/* Subtle red glow on hover — top edge accent */}
      <span
        aria-hidden="true"
        className={`
          absolute inset-x-0 top-0 h-px rounded-full
          bg-gradient-to-r from-transparent via-red-500 to-transparent
          transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Header */}
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-base font-semibold text-white leading-snug tracking-tight group-hover:text-red-400 transition-colors duration-200">
            {title}
          </h3>
          {highlight && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-red-950 text-red-400 border border-red-900">
              Destacado
            </span>
          )}
        </div>
        {status && <StatusBadge status={status} />}
      </header>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed flex-1">
        {description}
      </p>

      {/* Tech tags */}
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag label={tag} />
            </li>
          ))}
        </ul>
      )}

      {/* Footer links */}
      <footer className="flex items-center gap-2 pt-1 border-t border-gray-800/70">
        <LinkButton
          href={github}
          icon={<IconGithub />}
          label="GitHub"
        />
        <LinkButton
          href={demo}
          icon={<IconExternal />}
          label={demo?.includes("steam") ? "Steam Workshop" : "Demo"}
        />
        {!github && !demo && (
          <span className="text-xs text-gray-700 italic">
            Sin enlaces disponibles aún
          </span>
        )}
      </footer>
    </article>
  );
}
