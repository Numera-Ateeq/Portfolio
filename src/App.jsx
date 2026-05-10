export default function Portfolio() {
  const projects = [
    {
      title: "E-Governance & Public Services Platform",
      desc: "A scalable government services platform with tax filing, land records, public complaints, and DevOps deployment workflows.",
      tech: "React, Node.js, Docker, Kubernetes",
    },
    {
      title: "Smart Hotel & Travel Booking Assistant",
      desc: "An AI-powered booking assistant with real-time booking and analytics features.",
      tech: "MERN Stack, MongoDB, REST APIs",
    },
    {
      title: "Gold Management SaaS System",
      desc: "A SaaS-based gold buying and selling management platform with inventory tracking.",
      tech: "Next.js, PostgreSQL, Tailwind CSS",
    },
  ];

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Artificial Intelligence",
    "DevOps",
    "Docker",
    "Git & GitHub",
    "SQL",
    "Full Stack Development",
    "Software Engineering",
  ];

  return (
    <div
      style={{
        fontFamily: "Times New Roman, serif",
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
          NUMERA ATEEQ
        </h1>

        <p style={{ fontSize: "22px", color: "#c084fc" }}>
          Full Stack Developer • AI Enthusiast • Software Engineering Student
        </p>

        <a
          href="https://github.com/Numera-Ateeq"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 25px",
            backgroundColor: "#9333ea",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Visit GitHub
        </a>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom: "70px" }}>
        <h2 style={{ color: "#c084fc", fontSize: "40px" }}>About Me</h2>

        <p style={{ lineHeight: "32px", fontSize: "20px" }}>
          I am a Software Engineering student passionate about Full Stack
          Development, Artificial Intelligence, and scalable SaaS systems.
          I enjoy building modern applications that solve real-world problems.
        </p>
      </section>

      {/* SKILLS */}
      <section style={{ marginBottom: "70px" }}>
        <h2 style={{ color: "#c084fc", fontSize: "40px" }}>Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "15px",
            marginTop: "25px",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#18181b",
                padding: "18px",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid #9333ea",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: "70px" }}>
        <h2 style={{ color: "#c084fc", fontSize: "40px" }}>
          Featured Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#18181b",
                padding: "25px",
                borderRadius: "15px",
                border: "1px solid #9333ea",
              }}
            >
              <h3 style={{ fontSize: "28px" }}>{project.title}</h3>

              <p style={{ lineHeight: "28px", marginTop: "10px" }}>
                {project.desc}
              </p>

              <p style={{ color: "#c084fc", marginTop: "15px" }}>
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ marginBottom: "70px" }}>
        <h2 style={{ color: "#c084fc", fontSize: "40px" }}>Education</h2>

        <div
          style={{
            backgroundColor: "#18181b",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            border: "1px solid #9333ea",
          }}
        >
          <h3>Mohammad Ali Jinnah University</h3>

          <p>Bachelor of Science in Software Engineering</p>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ textAlign: "center", marginTop: "80px" }}>
        <h2 style={{ color: "#c084fc", fontSize: "40px" }}>
          Let’s Connect
        </h2>

        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          Open for internships, collaborations, and software engineering
          opportunities.
        </p>

        <a
          href="mailto:yourmail@example.com"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "12px 25px",
            backgroundColor: "#9333ea",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Contact Me
        </a>
      </section>
    </div>
  );
}
