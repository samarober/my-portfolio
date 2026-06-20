import { profile, projects } from './data/portfolioData'

export default function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 px-6 py-16 max-w-4xl mx-auto">

      {/* Cabecera del perfil */}
      <header className="mb-16">
        <p className="text-sm font-mono text-red-500 mb-2">
          Hola, soy
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">
          {profile.name}
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          {profile.role}
        </p>
        <p className="text-gray-500 max-w-xl leading-relaxed">
          {profile.shortBio}
        </p>
      </header>

      {/* Sección de proyectos — ProjectCard llega en Fase 3 */}
      <section>
        <h2 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8">
          // proyectos
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-800 rounded-xl p-5 text-gray-400"
            >
              <p className="text-white font-semibold mb-1">{project.title}</p>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}