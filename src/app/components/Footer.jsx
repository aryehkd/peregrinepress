import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return  (
    <footer className="bg-neutral-900 text-white py-12 font-serif">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Company Info & Socials */}
        <div>
          <h3 className="text-lg font-bold mb-4">Peregrine Press</h3>
          <p className="mt-2">info@peregrinepress.us</p>
          <div className="flex items-center gap-3 mt-4">
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
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/books" className="text-neutral-300 hover:text-white">Books</Link></li>
            <li><Link href="/about" className="text-neutral-300 hover:text-white">About Us</Link></li>
            <li><Link href="/authors" className="text-neutral-300 hover:text-white">Authors</Link></li>
            <li><Link href="/contact" className="text-neutral-300 hover:text-white">Contact</Link></li>
            <li><Link href="/submissions" className="text-neutral-300 hover:text-white">Submissions</Link></li>
          </ul>
        </div>

        {/* Column 3: Email Signup */}
        <div>
          <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
          <form className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 px-3 py-2 border border-neutral-500 bg-transparent text-white placeholder-neutral-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 px-3 py-2 border border-neutral-500 bg-transparent text-white placeholder-neutral-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-neutral-500 bg-transparent text-white placeholder-neutral-400"
            />
            <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 text-lg font-serif text-black transition hover:bg-yellow-600"
                >
                Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}