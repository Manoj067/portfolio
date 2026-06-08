export default function Experience() {
  const experience = [
    {
      company: "Tiramisu New Media Solutions",
      role: "Frontend Developer",
      duration: "2023 - Present",
      description:
        "Developing React.js, Next.js, Vue.js and WordPress applications. Building responsive UI, API integrations and LearnDash LMS solutions.",
    },
    {
      company: "Freelance Projects",
      role: "Frontend Developer",
      duration: "2022 - 2023",
      description:
        "Worked on responsive websites, landing pages and WordPress development projects.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="text-blue-400 uppercase tracking-[4px]">
            Experience
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Work Journey
          </h2>

        </div>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {experience.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-10"
            >
              <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-[11px]"></div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">

                <h3 className="text-white text-2xl font-bold">
                  {item.company}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.role}
                </p>

                <p className="text-gray-400 mt-1">
                  {item.duration}
                </p>

                <p className="text-gray-300 mt-5 leading-8">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}