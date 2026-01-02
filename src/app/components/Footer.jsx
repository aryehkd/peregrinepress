import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 font-serif">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          
          {/* Column 1: Brand + socials */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Peregrine Press</h3>
            <p className="text-neutral-300">info@peregrinepress.us</p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-neutral-300 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-neutral-300 hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/books" className="text-neutral-300 hover:text-white">Books</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-white">About Us</Link></li>
              <li><Link href="/authors" className="text-neutral-300 hover:text-white">Authors</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white">Contact</Link></li>
              <li><Link href="/submissions" className="text-neutral-300 hover:text-white">Submissions</Link></li>
            </ul>
          </div>

          {/* Column 3: Email signup */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect With Us</h3>

            <form className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border border-neutral-500 bg-transparent text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border border-neutral-500 bg-transparent text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-neutral-500 bg-transparent text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 text-lg font-serif text-black transition hover:bg-yellow-600"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </footer>
  );
}