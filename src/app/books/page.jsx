import BookCard from "../components/BookCard";

export default function BooksPage() {
  const books = [
    {
      title: "Example Book 1",
      description: "Gentrify humblebrag mustache, ramps intelligentsia blackbird spyplane farm-to-table mixtape migas gochujang",
      imageUrl: "/book6.jpeg",
      href: "/books/the-windswept-plains",
    },
    {
      title: "Example Book 2",
      description: "Health goth ennui shabby chic, snackwave readymade umami keytar fashion axe mukbang hella icelan",
      imageUrl: "/bookcover3.jpg",
      href: "/books/city-of-ashes",
    },
    {
      title: "Example Book 3",
      description: "Gluten-free keytar VHS cornhole bitters distillery seitan poutine williamsburg vinyl neutra",
      imageUrl: "/boook5.jpg",
      href: "/books/shadows-and-starlight",
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
        <div className="grid gap-8 md:grid-cols-3">
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