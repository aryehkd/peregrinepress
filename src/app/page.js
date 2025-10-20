// app/page.tsx (Next.js App Router)
// or pages/index.tsx (if using Pages Router)
import Image from "next/image";
import Link from "next/link";
import BookCard from "./components/BookCard";

const featuredBooks = [
  {
    title: "Dahij",
    description: "Felwine Sarr",
    imageUrl: "/placeholder.png",
    href: "/books/the-windswept-plains",
  },
  {
    title: "Letters to an African President",
    description: "El Hadji Malick Ndiaye",
    imageUrl: "/placeholder.png",
    href: "/books/city-of-ashes",
  },
  {
    title: "Metaphysical Ladders",
    description: "Abdallah Zrika",
    imageUrl: "/placeholder.png",
    href: "/books/shadows-and-starlight",
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
  <div className="absolute left-1/2 top-[35%] w-full max-w-3xl -translate-x-1/2 text-center">
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
      href="#catalog"
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
{/* Featured Books */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-serif mb-8 text-center">Forthcoming Titles</h2>

  {/* Mobile: stacked with gap. md+: 3 per row, space-between */}
  <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-between md:gap-y-10 md:gap-x-0">
    {featuredBooks.map((book, index) => (
      <div key={index} className="w-full md:w-[20%]">
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