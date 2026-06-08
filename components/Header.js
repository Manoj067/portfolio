import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-blue-500 hover:scale-105 transition"
        >
          Manoj
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link href="/About" className="hover:text-blue-400 transition">
            About
          </Link>

          <Link href="/Skills" className="hover:text-blue-400 transition">
            Skills
          </Link>

          <Link href="/Experience" className="hover:text-blue-400 transition">
            Experience
          </Link>

          <Link href="/Projects" className="hover:text-blue-400 transition">
            Projects
          </Link>

          <Link href="/Contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-slate-900 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/About" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/Skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>

          <Link href="/Experience" onClick={() => setMenuOpen(false)}>
            Experience
          </Link>

          <Link href="/Projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          <Link href="/Contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

        </div>
      </div>
    </header>
  );
}