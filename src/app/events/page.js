export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDE7] text-gray-900">
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif mb-10 text-center">
          Upcoming Events
        </h1>
        <div className="space-y-12">
          {/* San Francisco Public Library Event */}
          <article className="bg-white/60 backdrop-blur-sm rounded-lg shadow-md ring-1 ring-black/5 overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
                March 10, 2026
              </p>
              <h2 className="text-xl font-serif font-semibold mb-3">
                San Francisco Public Library — Felwine Sarr on Identity and Language
              </h2>
              <p className="text-gray-700 mb-4">
                San Francisco Public Library, main branch
                <br />
                100 Larkin Street, San Francisco
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Centered on Felwine Sarr&apos;s <em>Dahij</em>—soon to be released in English for the first time by Peregrine Press—Villa Albertine San Francisco is delighted to highlight this moving meditation on identity, exile, and self-reclamation in the presence of the author. Blending philosophy, memory, and poetic storytelling, Sarr explores what it means to belong in a world shaped by migration and colonial legacies. Rooted in African traditions yet deeply universal, <em>Dahij</em> invites readers to listen closely to an African voice imagining the future on its own terms.
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                The conversation between Felwine Sarr and Victor Reinking will explore how geography, religion, and identity intersect and shape one another, while also considering how African literature travels—across languages, institutions, and global audiences.
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Part of Villa Albertine San Francisco&apos;s Mois de la Francophonie.
              </p>
              <a
                href="https://villa-albertine.org/va/events/mois-de-la-francophonie-san-francisco-felwine-sarr-on-identity-and-language/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-amber-800 hover:text-amber-900 underline focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                Find out more and register →
              </a>
            </div>
          </article>

          {/* Elliott Bay Event */}
          <article className="bg-white/60 backdrop-blur-sm rounded-lg shadow-md ring-1 ring-black/5 overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
                March 14, 2026 · 7:00–8:00 PM
              </p>
              <h2 className="text-xl font-serif font-semibold mb-3">
                Peregrine Press presents Felwine Sarr &amp; Malick Ndiaye
              </h2>
              <p className="text-gray-700 mb-4">
                Elliott Bay Book Company, Seattle
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Scholar, musician, and writer Felwine Sarr and Seattle University professor Malick Ndiaye visit the store to discuss two major works of African literature in English translation, <em>Dahij</em> by Sarr and <em>Letters to My President</em> by Ndiaye—the first two titles from Peregrine Press.
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Co-sponsored by Alliance Française de Seattle. Registration not required; RSVP helps us anticipate audience size. Books by both authors will be available for purchase.
              </p>
              <a
                href="https://www.elliottbaybook.com/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-amber-800 hover:text-amber-900 underline focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                Event details and RSVP →
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
