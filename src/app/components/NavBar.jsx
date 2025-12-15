import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#FFFDE7] border-b shadow-sm">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link 
          href="/"   
          className="inline-flex items-center gap-2 text-4xl font-serif font-bold text-gray-900 leading-none gap-8"
        >
          <Image
            src={"/logo-transparent.png"}
            alt={"logo"}
            width={128}
            height={128}
            className="h-[2em] w-auto object-contain align-middle shrink-0"
          /> 
        <div className="flex flex-col">
          <span className="font-serif text-xl md:text-4xl">
            Peregrine Press
          </span>
          <span
            className="font-serif text-sm md:text-base"
            style={{ marginTop: '2px', color: '#636B30' }}
          >
            African Voices in Translation
          </span>
        </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-800 hover:text-yellow-700 transition text-xl font-serif" >
            Home
          </Link>
          <Link href="/books" className="text-gray-800 hover:text-yellow-700 transition text-xl font-serif">
            Books
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-yellow-700 transition text-xl font-serif">
            About Us
          </Link>
          <Link href="/authors" className="text-gray-800 hover:text-yellow-700 transition text-xl font-serif">
            Authors
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-yellow-700 transition text-xl font-serif">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}