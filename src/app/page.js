// app/page.tsx (Next.js App Router)
// or pages/index.tsx (if using Pages Router)
import Image from "next/image";
import Link from "next/link";
import BookCard from "./components/BookCard";

const newReleases = [
  {
    title: "Dahij",
    description: "Felwine Sarr",
    imageUrl: "/dahij-cover.png",
    href: "/books/dahij",
  },
  {
    title: "Letters to My President",
    description: "El Hadji Malick Ndiaye",
    imageUrl: "/letters-cover.png",
    href: "/books/letters-to-my-president",
  },
];

const forthcomingTitles = [
  {
    title: "Can We Talk About Something Else?",
    description: "Maïssa Bey",
    imageUrl: "/canwetalkaboutsomethingelse.png",
    href: "/books/can-we-talk-about-something-else",
  },
  {
    title: "Metaphysical Ladders",
    description: "Abdallah Zrika",
    imageUrl: "/metaphysicalladders.png",
    href: "/books/metaphysical-ladders",
  },
  {
    title: "The Blue Trio",
    description: "Ken Bugul",
    imageUrl: "/thebluetrio.png",
    href: "/books/the-blue-trio",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDE7] text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
{/* Background images */}
{/* Mobile: single full-bleed image (21a.jpeg) */}
<div className="absolute inset-0 md:hidden">
<div className="relative h-full w-full">
<img src="/21a.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover" />
</div>
</div>


{/* Desktop: 2/3 + 1/3 split */}
<div className="absolute inset-0 hidden md:grid md:grid-cols-3">
<div className="relative col-span-2">
<img src="/21a.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover" />
</div>
<div className="relative col-span-1">
<img src="/30a.jpeg" alt="" className="absolute inset-0 h-full w-full object-cover" />
</div>
</div>
{/* Content shifted up (≈30% from top) */}
<div className="relative z-10 h-full px-6">
  {/* Position the wrapper absolutely and anchor its top at ~30% */}
  <div className="absolute left-1/2 top-[25%] w-full max-w-3xl -translate-x-1/2 text-center">
    {/* Glass plate for text */}
    <div
      className="
        mx-auto  px-6 py-6 md:px-8 md:py-8
        bg-white/25 md:bg-white/40
        backdrop-blur-sm
        ring-1 ring-white/50
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
      "
    >
      <p className="text-xl md:text-2xl font-serif leading-relaxed text-[#1B1B1B]/90">
        Our passion is sharing Africa’s literary richness in translation —
        from histories and poetry to vibrant fiction and short stories.
        We champion linguistic diversity, cultural dialogue, and literature
        as a conduit for global empathy.
      </p>
    </div>

    {/* Floating button outside the overlay */}
    <a
      href="books"
      className="
        absolute left-1/2 top-full -translate-x-1/2 mt-4
        inline-flex items-center justify-center rounded-lg
        bg-yellow-500 px-6 py-3 text-lg font-serif text-black
        shadow-lg ring-1 ring-black/10 transition hover:bg-yellow-600
      "
      style={{ zIndex: 20 }}
    >
      Explore Our Books
    </a>
  </div>
</div>

</section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-10 text-center">
          Upcoming Events
        </h2>
        <div className="space-y-12">
          {/* San Francisco Public Library Event */}
          <article className="bg-white/60 backdrop-blur-sm rounded-lg shadow-md ring-1 ring-black/5 overflow-hidden">
            <div className="p-6 md:p-8">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
                March 10, 2026
              </p>
              <h3 className="text-xl font-serif font-semibold mb-3">
                San Francisco Public Library — Felwine Sarr on Identity and Language
              </h3>
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
              <h3 className="text-xl font-serif font-semibold mb-3">
                Peregrine Press presents Felwine Sarr &amp; Malick Ndiaye
              </h3>
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

{/* Our New Releases */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-serif mb-8 text-center">
    Our New Releases
  </h2>
  <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-24 items-center md:items-stretch">
    {newReleases.map((book, index) => (
      <div key={index} className="w-full md:w-[22%] flex justify-center">
        <BookCard
          title={book.title}
          description={book.description}
          imageUrl={book.imageUrl}
          href={book.href}
        />
      </div>
    ))}
  </div>
</section>

{/* Forthcoming Titles */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-serif mb-8 text-center">
    Forthcoming Titles
  </h2>
  <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-24 items-center md:items-stretch">
    {forthcomingTitles.map((book, index) => (
      <div key={index} className="w-full md:w-[22%] flex justify-center">
        <BookCard
          title={book.title}
          description={book.description}
          imageUrl={book.imageUrl}
          href={book.href}
        />
      </div>
    ))}
  </div>
</section>

     

    </main>
  );
}