// app/page.tsx (Next.js App Router)
// or pages/index.tsx (if using Pages Router)
import Image from "next/image";
import Link from "next/link";
import BookCard from "./components/BookCard";

const featuredBooks = [
  {
    title: "Example Book 1",
    description: "Gentrify humblebrag mustache, ramps intelligentsia blackbird spyplane farm-to-table mixtape migas gochujang",
    imageUrl: "/images/book1.jpg",
    href: "/books/the-windswept-plains",
  },
  {
    title: "Example Book 2",
    description: "Health goth ennui shabby chic, snackwave readymade umami keytar fashion axe mukbang hella icelan",
    imageUrl: "/images/book2.jpg",
    href: "/books/city-of-ashes",
  },
  {
    title: "Example Book 3",
    description: "Gluten-free keytar VHS cornhole bitters distillery seitan poutine williamsburg vinyl neutra",
    imageUrl: "/images/book3.jpg",
    href: "/books/shadows-and-starlight",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[70vh] bg-gray-100">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Peregrine Press
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Publishing exceptional voices in contemporary literature.
          </p>
          <Link
            href="/books"
            className="bg-gray-900 text-white px-6 py-3 text-lg rounded-lg hover:bg-gray-700 transition"
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

      {/* Newsletter Signup */}
      <section className="py-16 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-3xl font-serif mb-4">Stay in the Loop</h2>
        <p className="mb-6 text-gray-300">
          Get updates on new releases, events, and submission calls.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto flex-1
                    bg-white border border-gray-300
                    focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}