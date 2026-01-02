import BookCard from "../components/BookCard";

export default function BooksPage() {
  const books = [
    {
      title: "Dahij",
      description: "Felwine Sarr",
      imageUrl: "/dahij-ps2.png",
      href: "/books/dahij",
    },
    {
      title: "Letters to an African President",
      description: "Elhadji Malick Ndiaye",
      imageUrl: "/letters-template.png",
      href: "/books/letters-to-an-african-president",
    },
    {
      title: "Can We Talk About Something Else?",
      description: "Maissa Bey",
      imageUrl: "/maissabey.png",
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

  return (
    <main className="min-h-screen bg-[#FFFDE7]">
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif mb-8 text-center text-gray-900">
          Our Books
        </h1>
        <p className="text-gray-800 max-w-2xl font-serif mx-auto text-center mb-12">
          Explore our collection of literary fiction, poetry, and essays from
          some of today’s most compelling voices.
        </p>
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-24">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              description={book.description}
              imageUrl={book.imageUrl}
              href={book.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}