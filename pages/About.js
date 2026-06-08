import CountUp from "react-countup";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
      <Header />
          return (
            
            <section
              id="about"
              className="py-24 bg-gradient-to-b from-[#020617] to-[#0f172a]"
            >
              <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-16">

                  <span className="text-blue-400 uppercase tracking-[4px]">
                    About Me
                  </span>

                  <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
                    Passionate Frontend Developer
                  </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                  {/* LEFT CONTENT */}
                  <div>

                    <p className="text-gray-300 text-lg leading-9">
                      I'm a Frontend Developer with 3+ years of experience
                      building modern, responsive and scalable web applications.
                      I specialize in React.js, Next.js, Vue.js, WordPress,
                      Tailwind CSS and LearnDash LMS development.
                    </p>

                    <p className="text-gray-400 mt-6 text-lg leading-9">
                      I enjoy creating visually appealing websites,
                      solving UI/UX challenges and integrating APIs.
                      My goal is to build fast, accessible and
                      user-friendly digital experiences.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                      <span className="bg-blue-600 px-4 py-2 rounded-full text-white">
                        React.js
                      </span>

                      <span className="bg-blue-600 px-4 py-2 rounded-full text-white">
                        Next.js
                      </span>

                      <span className="bg-blue-600 px-4 py-2 rounded-full text-white">
                        Tailwind CSS
                      </span>

                      <span className="bg-blue-600 px-4 py-2 rounded-full text-white">
                        WordPress
                      </span>

                      <span className="bg-blue-600 px-4 py-2 rounded-full text-white">
                        LearnDash
                      </span>

                    </div>

                  </div>

                  {/* RIGHT COUNTERS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Projects */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">

                      <h3 className="text-5xl font-bold text-blue-400">
                        <CountUp
                          end={20}
                          duration={3}
                        />
                        +
                      </h3>

                      <p className="text-gray-300 mt-3">
                        Projects Completed
                      </p>

                    </div>

                    {/* Experience */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">

                      <h3 className="text-5xl font-bold text-blue-400">
                        <CountUp
                          end={3}
                          duration={3}
                        />
                        +
                      </h3>

                      <p className="text-gray-300 mt-3">
                        Years Experience
                      </p>

                    </div>

                    {/* Clients */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">

                      <h3 className="text-5xl font-bold text-blue-400">
                        <CountUp
                          end={15}
                          duration={3}
                        />
                        +
                      </h3>

                      <p className="text-gray-300 mt-3">
                        Happy Clients
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            </section>
          );
        }
      <Footer />