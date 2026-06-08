export default function Projects() {
  const projects = [
    {
      title: "Chowgule Shipyard",
      image: "/images/chowgule.jpg",
      tech: "Next.js + WordPress",
      description:
        "Corporate website for one of India's leading shipbuilding companies featuring dynamic content and responsive UI.",
      live: "https://chowgule.co.in",
    },

    {
      title: "Padmashree Group",
      image: "/images/padmashree.jpg",
      tech: "React.js + Tailwind CSS",
      description:
        "Modern corporate website with responsive layouts, optimized performance and interactive user experience.",
      live: "https://padmashree.com",
    },

    {
      title: "Biozeen",
      image: "/images/iozeen.jpg",
      tech: "WordPress + ACF",
      description:
        "Biotechnology training platform with dynamic content management and course information system.",
      live: "https://biozeen.com",
    },

    {
      title: "Typerating Pro LMS",
      image: "/images/type.jpg",
      tech: "LearnDash + WordPress",
      description:
        "Online aviation training platform with LMS integration, course management and certification workflows.",
      live: "https://typeratingpro.com",
    },

    {
      title: "US Agri Seeds",
      image: "/images/usagriseeds.jpg",
      tech: "React.js + Next.js",
      description:
        "Agriculture and hybrid seeds company website featuring product catalogs, dealer information and crop solutions.",
      live: "https://usagriseeds.com",
    },

    {
      title: "Portfolio Website",
      image: "/images/portflio.jpg",
      tech: "Next.js + Tailwind CSS",
      description:
        "Personal portfolio website showcasing projects, skills, experience and professional achievements.",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#0f172a] to-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">

          <span className="text-blue-400 uppercase tracking-[4px]">
            Portfolio
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
            A collection of React.js, Next.js, WordPress,
            LearnDash and Tailwind CSS projects delivered
            across corporate, education, agriculture and
            manufacturing industries.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500 hover:-translate-y-3 transition-all duration-500 flex flex-col"
            >

              {/* IMAGE */}
              <div className="h-[240px] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col flex-grow">

                <h3 className="text-white text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <span className="text-blue-400 mb-4">
                  {project.tech}
                </span>

                <p className="text-gray-400 leading-7 flex-grow">
                  {project.description}
                </p>

                <div className="mt-8">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition duration-300"
                  >
                    Visit Website
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}