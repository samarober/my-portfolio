import { profile, projects, techStack } from './data/portfolioData'
import ProjectCard from './components/ProjectCard'

export default function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 px-4 sm:px-6 py-12 sm:py-16 max-w-4xl mx-auto flex flex-col gap-20 sm:gap-24">

      {/* =========================================
          SECCIÓN HERO (CABECERA DEL PERFIL)
          ========================================= */}
      <header className="flex flex-col-reverse sm:flex-row items-center sm:items-start text-center sm:text-left justify-between gap-8 sm:gap-12">
        <div className="flex-1 flex flex-col items-center sm:items-start">
          
          {/* Saludo inicial */}
          <p className="text-sm font-mono text-green-500 mb-2">
            // Hola, soy
          </p>
          
          {/* Nombre principal */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            {profile.name}
          </h1>
          
          {/* Rol/Puesto */}
          <p className="text-lg sm:text-xl text-gray-400 font-medium mb-6">
            {profile.role}
          </p>
          
          {/* Biografía corta */}
          <p className="text-gray-500 max-w-md leading-relaxed mb-8">
            {profile.shortBio}
          </p>

          {/* Botones CTA (Llamada a la acción para Contacto y GitHub) */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-8">
            <a href={`mailto:${profile.email}`} className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
              Contactar
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg border border-gray-700 transition-colors duration-200">
              GitHub
            </a>
          </div>

          {/* El toque 'Dev' tipo terminal de código */}
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-xs sm:text-sm font-mono text-gray-300 shadow-sm max-w-full overflow-x-auto">
            <span className="text-green-500 shrink-0">{'>'}</span>
            <span className="text-sky-400 shrink-0">focus.current</span>
            <span className="text-white shrink-0">=</span>
            <span className="text-amber-300 truncate">['backend', 'java', 'postgreSQL', 'docker']</span>
          </div>
        </div>

        {/* Contenedor para tu foto de perfil */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 shrink-0 rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden relative shadow-lg">
           <img src="/mi-foto.png" alt="Perfil" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* =========================================
          SECCIÓN DE STACK TÉCNICO
          ========================================= */}
      <section>
        <h2 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8 text-center sm:text-left">
          // stack técnico
        </h2>
        
        {/* Grid para las categorías del stack */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {techStack.map((stack, index) => (
            <div key={index} className="p-5 rounded-xl border border-gray-800 bg-gray-900/40 hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-white font-medium mb-4">{stack.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <li key={item} className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-gray-800 text-gray-300 border border-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          SECCIÓN DE PROYECTOS (Itera sobre el array)
          ========================================= */}
      <section>
        <h2 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8 text-center sm:text-left">
          // proyectos
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </main>
  )
}