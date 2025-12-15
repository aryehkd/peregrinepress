import Image from "next/image";
import { notFound } from "next/navigation";

const BOOKS = {
  dahij: {
    slug: "dahij",
    title: "Dahij",
    author: "Felwine Sarr",
    image:  "/dahij-ps2.png",
    description:
      "Short hardcoded description goes here. Replace with real copy when ready.",
    reviews: [
      { quote: "Review goes here.", source: "Reviewer" },
      { quote: "Review goes here.", source: "Reviewer" },
    ],
  },
  "letters-to-an-african-president": {
    slug: "letters-to-an-african-president",
    title: "Letters to an African President",
    author: "El Hadji Malick Ndiaye",
    image: "/letters-ps2.png",
    description:
      "Short hardcoded description goes here. Replace with real copy when ready.",
    reviews: [
      { quote: "Review goes here.", source: "Reviewer" },
      { quote: "Review goes here.", source: "Reviewer" },
    ],
  },
};

export default function BookPage({ params }) {
  const book = BOOKS[params.book_name];
  if (!book) return notFound();

  return (
    <main className="bg-[#fffce7]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-start">
          {/* Cover */}
          <div className="w-full max-w-[320px]">
            <div className="overflow-hidden rounded-xl border border-black/10 bg-[#fffce7] shadow-sm">
              <div className="relative aspect-[5/7] w-full">
                <Image
                  src={book.image}
                  alt={`${book.title} cover`}
                  fill
                  sizes="(max-width: 768px) 90vw, 320px"
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <header className="mb-8">
              <h1 className="font-serif text-4xl text-black">
                {book.title}
              </h1>
              <p className="mt-2 font-serif text-lg text-black/70">
                {book.author}
              </p>
            </header>

            <section className="mb-10">
              <h2 className="font-serif text-xl text-black">
                Description
              </h2>
              <p className="mt-3 font-serif text-base leading-relaxed text-black/80">
                {book.description}
              </p>
            </section>

            {book.reviews?.length > 0 && (
              <section>
                <h2 className="font-serif text-xl text-black">
                  Reviews
                </h2>
                <div className="mt-4 space-y-4">
                  {book.reviews.map((r, i) => (
                    <blockquote
                      key={i}
                      className="rounded-xl border border-black/10 bg-[#fffce7]/60 p-5"
                    >
                      <p className="font-serif text-black/80">
                        “{r.quote}”
                      </p>
                      <footer className="mt-2 font-serif text-sm text-black/60">
                        — {r.source}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

// Prebuild known routes
export function generateStaticParams() {
  return Object.keys(BOOKS).map((book_name) => ({ book_name }));
}