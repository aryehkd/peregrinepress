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
      { quote: "placeholder review", source: "Reviewer" },
    ],
  },
  "letters-to-an-african-president": {
    slug: "letters-to-an-african-president",
    title: "Letters to an African President",
    author: "Elhadji Malick Ndiaye",
    image: "/letters-template.png",
    description:
      `In this epistolary collection, Elhadji Malick Ndiaye launches an exacting correspondence with a fictional African leader while drawing upon pre-colonial, colonial, and post-colonial histories.\n
      These five demanding letters address an unstable continental environment dominated by violence rather than deliberation. Elhadji Malick Ndiaye not only paints a precise and unbiased portrait of the African leader, but he also exposes the constantly changing landscape of conflicting institutions and opportunistic policies that blatantly entangle the public and private spheres.\n
      Elhadji Malick Ndiaye finds hope in the resurgence of African youth that are radically challenging the powers wielded by over four generations of African leaders. Through this impressive collection, he reframes the political scars on Africa’s landscape as fertile ground for the seeds of a brighter future.`,
    reviews: [
      { quote: "placeholder review", source: "Reviewer" },
    ],
  },
  "can-we-talk-about-something-else": {
    slug: "can-we-talk-about-something-else",
    title: "Can We Talk About Something Else?",
    author: "Maïssa Bey",
    image: "/maissabey3.png",
    description: `Maïssa Bey’s poignant short story collection *Can We Talk About Something Else?* captures the complexities of life in post–civil war Algeria through a series of intimate narratives shaped by the political turmoil of the “Black Decade.”\n
      Rather than focusing on heroes, these stories delve into the lives of individuals grappling with the slow disintegration of their surroundings. Bey’s characters lose family members, loved ones, and even themselves as they search for meaning in a world where reason and peace feel increasingly elusive. Throughout the collection, Bey weaves together themes of gender relations, Islam, and the human instinct to dream in the face of atrocity.\n
      Bey’s writing is subtle yet powerful. Instead of overtly denouncing the violence and chaos of the era, she narrates the lived experiences of those affected, allowing their collective stories to speak for themselves. Each story bears a distinct style—ranging from poetic monologues to visceral fragments that mirror the way trauma resurfaces in the mind.\n
      Her characters are men and women—especially women—whose identities have been eroded by history. She tells the story of a young man condemned to death, destined to become one of the thousands of unnamed victims of the Algerian Civil War; of a woman confronting both cowardice and liberation after her husband’s murder; of women killed in ritual sacrifices carried out in the name of Islam.\n
      *Can We Talk About Something Else?* is both a literary testimony and a protest against silence. Bey’s work illuminates the personal costs of Algeria’s history while contributing to a broader discourse on resilience, identity, and the search for meaning in times of conflict. As the legacy of the Black Decade continues to shape Algeria’s collective memory, these stories resonate with universal themes of loss, survival, uncertainty, and the enduring quest for peace.`,
    reviews: [
      { quote: "placeholder review", source: "Reviewer" },
    ],
  },
  "metaphysical-ladders": {
    slug: "metaphysical-ladders",
    title: "Metaphysical Ladders",
    author: "Abdallah Zrika",
    image: "/metaphysicalladders.png",
    description: `no description yet`,
    reviews: [
      { quote: "placeholder review", source: "Reviewer" },
    ],
  },
  "the-blue-trio": {
    slug: "the-blue-trio",
    title: "The Blue Trio",
    author: "Ken Bugul",
    image: "/thebluetrio.png",
    description: `no description yet`,
    reviews: [
      { quote: "placeholder review", source: "Reviewer" },
    ],
  }
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
              <p className="mt-3 font-serif text-base leading-relaxed text-black/80 whitespace-pre-line">
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