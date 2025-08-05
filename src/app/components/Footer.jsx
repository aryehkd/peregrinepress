import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/books" className="hover:text-white transition">
            Books
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>
          <Link href="/authors" className="hover:text-white transition">
            Authors
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" aria-label="Facebook" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Peregrine Press. All rights reserved.
        </p>
      </div>
    </footer>
  );
}