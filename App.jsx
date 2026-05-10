export default function Portfolio() {
  const projects = [
    {
      title: "E-Governance & Public Services Platform",
      desc: "A scalable government services platform with tax filing, land records, public complaints, and DevOps-based deployment workflows.",
      tech: "React, Node.js, Docker, Kubernetes, Terraform",
    },
    {
      title: "Smart Hotel & Travel Booking Assistant",
      desc: "An AI-powered booking assistant inspired by Booking.com with real-time availability, analytics dashboard, and mock payment integration.",
      tech: "MERN Stack, REST APIs, MongoDB",
    },
    {
      title: "Gold Management SaaS System",
      desc: "A modern SaaS-based gold buying and selling management software with flexible rate management and customer inventory tracking.",
      tech: "Next.js, PostgreSQL, Tailwind CSS",
    },
  ];

  const skills = [
    "Full Stack Development",
    "Artificial Intelligence",
    "DevOps & CI/CD",
    "React.js",
    "Node.js",
    "MongoDB",
    "Docker & Kubernetes",
    "SQL & Database Design",
    "Software Engineering",
    "Git & GitHub",
  ];

  return (
    <div style={{ fontFamily: 'Times New Roman, serif' }} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-purple-900/40 to-black">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          NUMERA ATEEQ
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          Full Stack Developer • AI Enthusiast • Software Engineering Student
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="https://github.com/Numera-Ateeq"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 transition shadow-lg"
          >
            GitHub
          </a>

          <a
            href="mailto:yourmail@example.com"
            className="px-6 py-3 rounded-2xl border border-purple-500 hover:bg-purple-500/20 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
          <p className="text-gray-300 leading-8 text-lg">
            I am a Software Engineering student at Mohammad Ali Jinnah University,
            passionate about building scalable web applications, AI-driven systems,
            and enterprise-level software solutions. I focus on creating modern,
            maintainable, and impactful digital products using cutting-edge
            technologies.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800">
          <h3 className="text-2xl font-semibold mb-4">Quick Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li>🎓 BS Software Engineering</li>
            <li>💻 Full Stack & AI Developer</li>
            <li>📍 Karachi, Pakistan</li>
            <li>🚀 Interested in scalable SaaS systems</li>
            <li>🌐 Open to internships & global opportunities</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center hover:border-purple-500 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:scale-105 transition duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 leading-7 mb-5">{project.desc}</p>
              <div className="text-purple-400 text-sm font-medium">
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-400 mb-10">
            Education
          </h2>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold">
              Mohammad Ali Jinnah University
            </h3>
            <p className="text-gray-400 mt-2">
              Bachelor of Science in Software Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-6">
          Let's Build Something Amazing
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8">
          Interested in collaborating on software engineering, AI, or full-stack
          development projects? Let’s connect and create impactful solutions.
        </p>

        <div className="mt-8">
          <a
            href="mailto:yourmail@example.com"
            className="px-8 py-4 bg-purple-600 rounded-2xl hover:bg-purple-700 transition shadow-lg text-lg"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
