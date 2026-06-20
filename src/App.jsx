import { profile, projects, techStack } from './data/portfolioData'
import ProjectCard from './components/ProjectCard'

export default function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 px-6 py-16 max-w-4xl mx-auto">

      {/* Cabecera del perfil (Hero) */}
      <header className="mb-20 flex flex-col-reverse sm:flex-row items-start justify-between gap-8">
        <div className="flex-1">
          <p className="text-sm font-mono text-red-500 mb-2">
            // Hola, soy
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xl text-gray-400 font-medium mb-6">
            {profile.role}
          </p>
          <p className="text-gray-500 max-w-xl leading-relaxed mb-6">
            {profile.shortBio}
          </p>
          
          {/* El toque 'Dev' tipo terminal */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-md text-sm font-mono text-gray-300 shadow-sm">
            <span className="text-red-500">{'>'}</span>
            <span className="text-sky-400">focus.current</span>
            <span className="text-white">=</span>
            <span className="text-amber-300">['backend', 'java', 'postgreSQL', 'docker']</span>
          </div>
        </div>

        {/* Contenedor para tu foto */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden relative shadow-lg">
          <img src="/mi-foto.png" alt="Perfil" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Sección de Stack Técnico */}
      <section className="mb-20">
        <h2 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8">
          // stack técnico
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {techStack.map((stack, index) => (
            <div key={index} className="p-5 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-white font-medium mb-4">{stack.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <li key={item} className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-gray-950 text-gray-400 border border-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de proyectos */}
      <section>
        <h2 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8">
          // proyectos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </main>
  )
}