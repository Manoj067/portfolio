import portfolioData from "../data/portfolioData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-white font-bold mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-5">

          {portfolioData.skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-5 rounded-xl text-center text-white hover:scale-105 duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}