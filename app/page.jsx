// app/page.jsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">FI</div>
          <div>
            <h1 className="text-xl font-semibold">Future Innovators Lab</h1>
            <p className="text-xs text-gray-500">Apprends. Choisis. Transforme.</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#" className="text-sm hover:underline">Accueil</a>
          <a href="/inscription" className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow">S'inscrire</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Choisis ton domaine et développe tes compétences dès aujourd'hui.
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            Future Innovators Lab rassemble les étudiants passionnés par la robotique, l'intelligence artificielle
            et le développement web. Inscris-toi, choisis une voie et rejoins le groupe pour apprendre en communauté.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/inscription" className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold">Commencer l'inscription</a>
            <a href="#domaines" className="inline-block px-6 py-3 rounded-lg border border-gray-200 text-sm">En savoir plus</a>
          </div>

          <ul className="mt-8 text-sm text-gray-500 grid grid-cols-1 sm:grid-cols-3 gap-2">
            <li>✅ Accès guidé pour débutants</li>
            <li>✅ Groupes WhatsApp pour chaque domaine</li>
            <li>✅ Suivi et export des inscriptions</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold">Comment ça marche</h3>
          <ol className="mt-4 space-y-3 text-gray-600">
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center font-semibold">1</div>
              <div>
                <div className="font-medium">Inscription</div>
                <div className="text-xs">Remplis ton profil (nom, âge, classe, bac, moyenne).</div>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center font-semibold">2</div>
              <div>
                <div className="font-medium">Choix du domaine</div>
                <div className="text-xs">Robotique, Intelligence Artificielle ou Développement Web.</div>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center font-semibold">3</div>
              <div>
                <div className="font-medium">Commencer</div>
                <div className="text-xs">Tu seras redirigé vers la page du domaine et vers le groupe WhatsApp.</div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Domain cards */}
      <section id="domaines" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Nos domaines</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">Choisis la voie qui te correspond — chaque domaine est expliqué brièvement et propose un groupe d'entraide.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Robotique */}
          <article className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">🤖</div>
              <div>
                <h4 className="font-semibold">Robotique</h4>
                <p className="text-sm text-gray-500">Construis, programme et contrôle des systèmes intelligents.</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a href="/inscription?domaine=robotique" className="text-sm font-medium text-indigo-600">S'inscrire →</a>
              <a href="/domaine/robotique" className="inline-block px-3 py-2 rounded-md border border-gray-200 text-sm">En savoir plus</a>
            </div>
          </article>

          {/* IA */}
          <article className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">🧠</div>
              <div>
                <h4 className="font-semibold">Intelligence Artificielle</h4>
                <p className="text-sm text-gray-500">Découvre les algorithmes qui transforment le monde.</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a href="/inscription?domaine=ia" className="text-sm font-medium text-indigo-600">S'inscrire →</a>
              <a href="/domaine/ia" className="inline-block px-3 py-2 rounded-md border border-gray-200 text-sm">En savoir plus</a>
            </div>
          </article>

          {/* Dev Web */}
          <article className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold">💻</div>
              <div>
                <h4 className="font-semibold">Développement Web</h4>
                <p className="text-sm text-gray-500">Apprends à créer des sites et applications modernes.</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <a href="/inscription?domaine=devweb" className="text-sm font-medium text-indigo-600">S'inscrire →</a>
              <a href="/domaine/devweb" className="inline-block px-3 py-2 rounded-md border border-gray-200 text-sm">En savoir plus</a>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold">Prêt à commencer ?</h4>
            <p className="mt-2 text-sm">Inscris-toi et rejoins une communauté d'étudiants motivés.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="/inscription" className="inline-block px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold">S'inscrire maintenant</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="font-semibold">Future Innovators Lab</div>
            <div>© {new Date().getFullYear()} — Créé par Carmel MILOGBO</div>
          </div>

          <div className="mt-4 md:mt-0">Contact — <a href="mailto:c47170315@gmail.com" className="underline">c47170315@gmail.com</a></div>
        </div>
      </footer>
    </main>
  )
}
