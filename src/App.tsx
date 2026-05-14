import { useEffect, useState } from 'react';

const stats = [
  { value: '6+', label: 'Years experience' },
  { value: '20+', label: 'Projects complete' },
  { value: '8', label: 'Technologies mastered' },
  { value: '492', label: 'Code commits' },
];

const projects = [
  {
    title: 'Enterprise dashboard',
    subtitle: 'Analytics platform, real-time insights, enterprise-ready UI',
    description:
      'Built a polished management dashboard with secure access controls, data visualization, and fast interactions.',
  },
  {
    title: 'Product launch experience',
    subtitle: 'Brand storytelling, performance, and conversion optimization',
    description:
      'Delivered a refined landing experience that converts visitors, loads quickly, and feels premium on every screen.',
  },
  {
    title: 'Cloud API architecture',
    subtitle: 'Microservices, authentication, and monitoring workflows',
    description:
      'Designed and deployed stable server APIs with developer-friendly docs, observability, and secure request handling.',
  },
];

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'UI / UX',
];

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
              obs.unobserve(entry.target);
            }, index * 100); // Stagger delay
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll('.fade-up').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#home">
          Huzaifa Ahmed
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy fade-up">
            <span className="eyebrow">Web Developer</span>
            <h1>
              Hello, I&apos;m <strong>Huzaifa Ahmed</strong>
              <span className="name-accent"></span>
              <br />
              I build premium digital products.
            </h1>
            <p>
              I create polished front-end experiences, scalable back-end systems, and clean architecture for brands that want exceptional performance and modern design.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                Hire me
              </a>
              <a className="button-secondary" href="#work">
                View work
              </a>
            </div>

            <div className="hero-links">
              <a className="button-secondary" href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button-secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>

            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <span>{item.value}</span>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual fade-up">
            <div className="visual-panel">
              <div className="profile-card">
                <div>
                  <h2>End-to-end development</h2>
                  <p>
                    Building responsive interfaces, APIs, and cloud-native solutions with a performance-first mindset.
                  </p>
                </div>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>TypeScript</span>
                  <span>Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="fade-up">
          <div className="section-title">
            <small>Who I am</small>
            <h2>Professional background with measurable results</h2>
          </div>
          <div className="cards-grid">
            <article className="card">
              <h3>Experience</h3>
              <p>
                I collaborate with teams to deliver scalable web applications, dashboards, and data-driven platforms from concept through launch.
              </p>
            </article>
            <article className="card">
              <h3>Design & engineering</h3>
              <p>
                I combine clean UI design with strong engineering practices to create maintainable and attractive digital products.
              </p>
            </article>
            <article className="card">
              <h3>Reliable delivery</h3>
              <p>
                Every project is built with attention to detail, accessibility, and polished interactions that feel intuitive.
              </p>
            </article>
          </div>
        </section>

        <section id="work" className="fade-up">
          <div className="section-title">
            <small>Selected work</small>
            <h2>Projects built for growth and reliability</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.title} className="project-item">
                <div>
                  <h4>{project.title}</h4>
                  <small>{project.subtitle}</small>
                </div>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="fade-up">
          <div className="section-title">
            <small>Expertise</small>
            <h2>Tools, languages, and platforms I use daily</h2>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-item">
                <span>{skill}</span>
                <strong>Expert</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="fade-up">
          <div className="section-title">
            <small>Let’s build</small>
            <h2>Ready to collaborate on your next product</h2>
          </div>
          <div className="contact-panel">
            <article className="contact-card">
              <h3>Contact</h3>
              <p>
                I&apos;m available for freelance, contract, and full-time roles. Send a message and I&apos;ll reply quickly.
              </p>
              <div className="contact-actions">
                <a href="mailto:huzaifaiftikhar127@gmail.com" className="button-primary">
                  huzaifaiftikhar127@gmail.com
                </a>
              </div>
            </article>
            <article className="contact-card">
              <h3>Quick info</h3>
              <p>
                Remote-friendly, experienced with cross-functional teams, and focused on delivering strong business outcomes.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
