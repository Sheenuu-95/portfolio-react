import "../styles/Projects.css";

const projects = [
 {
  id: "01",
  tag: "LMS",
  title: "Online Learning Management System",
  description: "A modern LMS platform featuring course management, student access, and progress tracking for online learning.",
  link: "https://github.com/Sheenuu-95"
 },
 {
  id: "02",
  tag: "Weather",
  title: "Weather Forecast Website",
  description: "A responsive weather forecast platform that provides real-time conditions, 7-day predictions, and city-based climate summaries.",
  link: "https://github.com/Sheenuu-95"
 },
 {
  id: "03",
  tag: "SMS",
  title: "Society Management System",
  description: "A society management system that handles member details, events, notices, and communication tools for residential communities.",
  link: "https://github.com/Sheenuu-95"
 }
];

function Projects() {
 return (
  <section id="projects">
   <div className="section-label">Projects</div>
   <h2 className="section-title">
    Things I've<br />
    <em>built</em>
   </h2>
   <p className="section-description">
    Projects include an Online Learning Management System (LMS), a Hospital Management System, and a Weather Forecast Website.
   </p>

   <div className="projects-grid">
    {projects.map((project) => (
     <div className="project-card" key={project.id}>
      <div className="project-num">{project.id}</div>
      <div className="project-tag">{project.tag}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
       View GitHub →
      </a>
     </div>
    ))}
   </div>

  </section>
 );
}

export default Projects;