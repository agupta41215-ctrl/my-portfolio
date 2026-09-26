import "./App.css";

function App() {
const skills = [
  // Programming
  { name: "JavaScript", category: "Programming", icon: "JS" },
  { name: "Java", category: "Programming", icon: "JV" },

  // Core Computer Science
  { name: "Data Structures & Algorithms", category: "Core CS", icon: "DS" },
  { name: "Object-Oriented Programming", category: "Core CS", icon: "OOP" },
  { name: "DBMS", category: "Core CS", icon: "DB" },

  // Frontend
  { name: "HTML & CSS", category: "Frontend", icon: "</>" },
  { name: "React.js", category: "Frontend", icon: "⚛" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "N" },
  { name: "Express.js", category: "Backend", icon: "EX" },

  // Database & Tools
  { name: "MySQL", category: "Database", icon: "SQL" },
  { name: "Git & GitHub", category: "Tools", icon: "GH" },
];

const projects = [
  {
    number: "01",
    title: "Nexa Digital",
    type: "Full Stack Web Application",
    description:
      "A full-stack business website with a React frontend, Node.js and Express backend, REST APIs, MySQL database integration and an authenticated admin dashboard.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/agupta41215-ctrl/nexa-digital",
  },
];

  return (
    <div className="portfolio">
      <div className="background-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          AG<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

            <p className="hero-small">HELLO, I'M</p>

            <h1>
              Aman
              <span>Gupta.</span>
            </h1>

            <h2>
              Full Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-focused web applications
              using React, JavaScript, Node.js and backend technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work <span>↗</span>
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/agupta41215-ctrl"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span>/</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                LinkedIn
              </a>
              <span>/</span>
              <a href="mailto:your-email@example.com">Email</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>developer.js</span>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  name: <span className="code-green">'Aman Gupta'</span>,
                </p>

                <p className="indent">
                  role: <span className="code-green">'Full Stack Developer'</span>,
                </p>

                <p className="indent">
                  frontend: <span className="code-orange">'React'</span>,
                </p>

                <p className="indent">
                  backend: <span className="code-orange">'Node.js'</span>,
                </p>

                <p className="indent">
                  database: <span className="code-orange">'MySQL'</span>,
                </p>

                <p className="indent">
                  passion: <span className="code-green">'Building'</span>
                </p>

                <p>{"};"}</p>

                <div className="terminal-line">
                  <span>➜</span> npm run build-future
                  <span className="cursor"></span>
                </div>
              </div>
            </div>

            <div className="floating-card card-one">
              <span>01</span>
              <p>Clean Code</p>
            </div>

            <div className="floating-card card-two">
              <span>02</span>
              <p>Responsive UI</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-label">01 — ABOUT ME</div>

          <div className="section-heading">
            <p>Turning ideas into</p>
            <h2>digital experiences.</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
  <p className="large-text">
    I'm a B.Tech Computer Science student focused on
    software development and full-stack web development.
  </p>

  <p>
    I build practical web applications using technologies like
    React, JavaScript, Node.js, Express.js and MySQL. I enjoy
    taking an idea from the frontend interface to the backend
    API and database.
  </p>

  <p>
    Along with development, I'm strengthening my foundation in
    Data Structures & Algorithms, Object-Oriented Programming and
    DBMS. My goal is to become a stronger software developer by
    consistently building, learning and solving real problems.
  </p>
</div>
          <div className="about-stats">
  <div className="stat">
    <strong>01</strong>
    <span>B.Tech CSE</span>
  </div>

  <div className="stat">
    <strong>02</strong>
    <span>Full Stack Development</span>
  </div>

  <div className="stat">
    <strong>03</strong>
    <span>DSA + Core CS</span>
  </div>

  <div className="stat">
    <strong>∞</strong>
    <span>Always Building</span>
  </div>
</div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <div className="section-label">02 — SKILLS</div>

          <div className="section-heading">
            <p>Tools I use to</p>
            <h2>build things.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>

                <div>
                  <h3>{skill.name}</h3>
                 <p>{skill.category}</p>
                </div>

                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="section-label">03 — PROJECTS</div>

          <div className="projects-heading">
            <div className="section-heading">
              <p>Selected work &</p>
              <h2>things I've built.</h2>
            </div>

            <p className="projects-intro">
              A selection of projects that represent my learning, development
              process and interest in building useful web applications.
            </p>
          </div>

          <div className="projects-list">
           
            {projects.map((project) => (
  <article className="project-card" key={project.title}>
    <div className="project-number">{project.number}</div>

    <div className="project-preview">
      <div className="preview-browser">
        <div className="preview-topbar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="preview-content">
          <div className="preview-brand">NEXA</div>

          <div className="preview-heading">
            Digital solutions for modern businesses.
          </div>

          <div className="preview-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="preview-buttons">
            <span>Services</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>

    <div className="project-info">
      <span className="project-status">{project.type}</span>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-footer">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-github"
        >
          View Source <span>↗</span>
        </a>

        <span className="project-stack">
          FULL STACK
        </span>
      </div>
    </div>
  </article>
))} 
    </div>
  </section>


             {/* JOURNEY */}
        <section className="journey section" id="journey">
          <div className="section-label">04 — JOURNEY</div>

          <div className="section-heading">
            <p>Learning. Building.</p>
            <h2>Growing.</h2>
          </div>

          <div className="journey-intro">
            <p>
              My journey is focused on becoming a stronger software developer
              through consistent learning, practical projects and problem
              solving.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">01</div>

              <div className="timeline-content">
                <small>EDUCATION</small>
                <h3>B.Tech — Computer Science & Engineering</h3>
                <p>
                  Building a strong foundation in programming, Data Structures
                  & Algorithms, Object-Oriented Programming, DBMS and core
                  computer science concepts.
                </p>

                <div className="timeline-tags">
                  <span>Computer Science</span>
                  <span>DSA</span>
                  <span>Core CS</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">02</div>

              <div className="timeline-content">
                <small>FULL STACK DEVELOPMENT</small>
                <h3>Frontend → Backend → Full Stack</h3>
                <p>
                  Working with HTML, CSS and JavaScript, then expanding into
                  React, Node.js, Express.js, REST APIs and MySQL to build
                  complete web applications.
                </p>

                <div className="timeline-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">03</div>

              <div className="timeline-content">
                <small>PROJECT BUILDING</small>
                <h3>Nexa Digital</h3>
                <p>
                  Built a full-stack business application with a React
                  frontend, Node.js and Express backend, REST APIs, MySQL
                  integration and an authenticated admin dashboard.
                </p>

                <div className="timeline-tags">
                  <span>Full Stack</span>
                  <span>REST API</span>
                  <span>MySQL</span>
                  <span>Admin Dashboard</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">04</div>

              <div className="timeline-content">
                <small>CURRENT FOCUS</small>
                <h3>Stronger Software Development</h3>
                <p>
                  Continuing to improve DSA, problem solving, backend
                  development, code quality and the ability to turn ideas into
                  practical software products.
                </p>

                <div className="timeline-tags">
                  <span>Problem Solving</span>
                  <span>DSA</span>
                  <span>Software Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="contact-box">
            <div className="section-label">05 — CONTACT</div>

            <p className="contact-small">LET'S BUILD SOMETHING USEFUL</p>

            <h2>
              Let's build
              <span> something.</span>
            </h2>

            <p className="contact-description">
              I'm interested in software development opportunities,
              collaborations and projects where I can learn, build and create
              useful digital experiences.
            </p>

            <div className="contact-actions">
              <a
                href="https://github.com/agupta41215-ctrl"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                View GitHub <span>↗</span>
              </a>

              <a href="#projects" className="contact-secondary">
                Explore Projects <span>↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <a href="#home" className="logo">
            AG<span>.</span>
          </a>
          <p>Designed & built by Aman Gupta.</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/agupta41215-ctrl"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#contact">Contact</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;