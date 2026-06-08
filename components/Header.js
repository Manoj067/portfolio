import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto flex justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-blue-500 hover:scale-105 transition"
        >
          Manoj
        </Link>

        <nav className="flex gap-8">

          <Link href="/">Home</Link>

          <Link href="/About">About</Link>

          <Link href="/Skills">Skills</Link>

          <Link href="/Experience">Experience</Link>

          <Link href="/Projects">Projects</Link>

          <Link href="/Contact">Contact</Link>

        </nav>

      </div>
    </header>
  );
}