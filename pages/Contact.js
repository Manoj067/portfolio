import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-400 uppercase tracking-[4px]">
            Contact
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Let's Work Together
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-white mb-8">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              I'm always interested in discussing new projects,
              creative ideas, or opportunities to be part of
              your vision.
            </p>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">
                    manusshetty067@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">
                    +91 7760173362
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-12">

              <h4 className="text-white text-xl mb-5">
                Follow Me
              </h4>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <FaGithub className="text-white" />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <FaLinkedin className="text-white" />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-blue-500"
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl text-white font-semibold w-full"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}