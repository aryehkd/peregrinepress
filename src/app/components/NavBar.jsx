import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-serif font-bold text-gray-900">
          Peregrine Press
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-800 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/books" className="text-gray-800 hover:text-indigo-600 transition">
            Books
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-indigo-600 transition">
            About Us
          </Link>
          <Link href="/authors" className="text-gray-800 hover:text-indigo-600 transition">
            Authors
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-indigo-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}