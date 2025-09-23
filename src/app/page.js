// app/page.tsx (Next.js App Router)
// or pages/index.tsx (if using Pages Router)
import Image from "next/image";
import Link from "next/link";
import BookCard from "./components/BookCard";

const featuredBooks = [
  {
    title: "Example Book 1",
    description: "Gentrify humblebrag mustache, ramps intelligentsia blackbird spyplane farm-to-table mixtape migas gochujang",
    imageUrl: "/fakebookcover.jpg",
    href: "/books/the-windswept-plains",
  },
  {
    title: "Example Book 2",
    description: "Health goth ennui shabby chic, snackwave readymade umami keytar fashion axe mukbang hella icelan",
    imageUrl: "/book4.jpeg",
    href: "/books/city-of-ashes",
  },
  {
    title: "Example Book 3",
    description: "Gluten-free keytar VHS cornhole bitters distillery seitan poutine williamsburg vinyl neutra",
    imageUrl: "/fakebook2.jpg",
    href: "/books/shadows-and-starlight",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDE7] text-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[70vh] bg-[#636B2F]">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-[#FDE68A]">
            Peregrine Press
          </h1>
          <p className="text-2xl md:text-2xl font-serif leading-relaxed text-[#FAF3E0] my-15 max-w-3xl mx-auto">
          Our passion is sharing Africa’s literary richness in translation — from histories and poetry to vibrant fiction and short stories. We champion linguistic diversity, cultural dialogue, and literature as a conduit for global empathy.
          </p>
          <Link
            href="/books"
            className="bg-yellow-500 text-black px-6 py-3 text-lg rounded-lg hover:bg-yellow-700 transition"
          >
            Explore Our Books
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">Featured Titles</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredBooks.map((book, index) => (
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

      {/* Author Spotlight */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Author Spotlight</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Meet the writers behind our stories. This month, we’re featuring Ethical 8-bit everyday carry air plant four dollar toast, pabst jawn echo park kombucha
          </p>
          <Link
            href="/authors/jane-doe"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Read Interview
          </Link>
        </div>
      </section>

    </main>
  );
}