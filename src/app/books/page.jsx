import BookCard from "../components/BookCard";

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

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#FFFDE7]">
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif mb-8 text-center text-gray-900">
          Books
        </h1>
        <p className="text-gray-800 max-w-2xl font-serif mx-auto text-center mb-12">
          Explore our collection of literary fiction, poetry, and essays from
          some of today’s most compelling voices.
        </p>

        <h2 className="text-3xl font-serif mb-8 text-center text-gray-900">
          Our New Releases
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-24 items-center md:items-stretch mb-16">
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

        <h2 className="text-3xl font-serif mb-8 text-center text-gray-900">
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