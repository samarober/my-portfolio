// =========================================
// ICONOS SVG (Sin dependencias externas)
// =========================================
function IconGithub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// =========================================
// CONFIGURACIÓN DE COLORES PARA LOS ESTADOS
// =========================================
const STATUS_STYLES = {
  "En desarrollo": "bg-amber-950 text-amber-400 border-amber-800",
  "Publicado": "bg-sky-950 text-sky-400 border-sky-800",
  "Completado": "bg-emerald-950 text-emerald-400 border-emerald-800",
  "Archivado": "bg-gray-900 text-gray-500 border-gray-700",
}

// Componente para la etiqueta de estado (ej: Publicado)
function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES["Archivado"]
  return (
    <span className={"inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border " + style}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}

// Componente para las tecnologías (ej: React, Docker)
function Tag({ label }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-gray-800 text-gray-300 border border-gray-700">
      {label}
    </span>
  )
}

// Componente para los botones de la tarjeta (GitHub / Demo)
function LinkButton({ href, icon, label }) {
  if (!href) return null
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 border border-gray-800 hover:text-green-400 hover:border-green-500 hover:bg-green-950/30 transition-all duration-200"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

// =========================================
// COMPONENTE PRINCIPAL DE LA TARJETA
// =========================================
export default function ProjectCard({ project }) {
  const { title, description, tags, github, demo, status, featured } = project

  return (
    <article className="group relative flex flex-col gap-4 p-6 rounded-xl border border-gray-800 bg-gray-950 text-gray-300 hover:border-green-500/60 transition-all duration-300">
      
      {/* Línea de acento superior — Solo aparece al hacer hover sobre la tarjeta */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Cabecera: Título del proyecto y Badges */}
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-base font-semibold text-white group-hover:text-green-400 transition-colors duration-200">
            {title}
          </h3>
          
          {/* Muestra la etiqueta de Destacado solo si es true en portfolioData.js */}
          {featured && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-green-950 text-green-400 border border-green-900">
              Destacado
            </span>
          )}
        </div>
        
        {/* Muestra el estado del proyecto (En desarrollo, Publicado...) */}
        {status && <StatusBadge status={status} />}
      </header>

      {/* Descripción principal del proyecto */}
      <p className="text-sm text-gray-400 leading-relaxed flex-1">
        {description}
      </p>

      {/* Píldoras de tecnologías: Mapea el array de tags */}
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
          {tags.map(function(tag) {
            return (
              <li key={tag}>
                <Tag label={tag} />
              </li>
            )
          })}
        </ul>
      )}

      {/* Footer: Botones de enlaces externos */}
      <footer className="flex items-center gap-2 pt-2 border-t border-gray-800">
        <LinkButton href={github} icon={<IconGithub />} label="GitHub" />
        <LinkButton href={demo} icon={<IconExternal />} label="Demo" />
        
        {/* Mensaje de respaldo si el proyecto no tiene enlaces configurados */}
        {!github && !demo && (
          <span className="text-xs text-gray-700 italic">Sin enlaces aún</span>
        )}
      </footer>

    </article>
  )
}