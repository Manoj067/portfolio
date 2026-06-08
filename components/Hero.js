import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <span className="text-blue-400 tracking-[5px] uppercase">
            Frontend Developer
          </span>

          <h1 className="text-white font-black text-6xl md:text-8xl mt-4 leading-tight">
            Manoj K S
          </h1>

         

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            Passionate Frontend Developer with 3+ years of experience
            building modern web applications using React.js, Next.js,
            Tailwind CSS, WordPress, and LearnDash.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            {/* <a
              href="/projects"
              className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              View Projects
            </a> */}
            <Link
              href="/Projects"
              className="px-8 py-4 rounded-full bg-blue-600 text-white"
            >
              View Projects
            </Link>

            <a
              href="/resume/Manoj_Resume.pdf"
              download
              className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-40 rounded-full"></div>

            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={450}
              height={450}
              className="rounded-full border-4 border-blue-500 object-cover relative z-10"
            />

          </div>

        </div>

      </div>
    </section>
  );
}