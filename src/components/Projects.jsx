import "../styles/Projects.css";

const projects = [
 {
  id: "01",
  tag: "Web Development",
  title: "Personal Portfolio",
  description: "This portfolio website showcases a polished dark aesthetic with well-structured sections and smooth interactions.",
  link: "https://github.com/Sheenuu-95"
 },
 {
  id: "02",
  tag: "Coming Soon",
  title: "Project Two",
  description: "A future project currently in progress. Stay tuned for a new addition to the portfolio.",
  link: "https://github.com/Sheenuu-95"
 },
 {
  id: "03",
  tag: "Coming Soon",
  title: "Project Three",
  description: "More projects are in development, each built to explore new tools and real-world ideas.",
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

   <div className="projects-grid">
    {projects.map((project) => (
     <div className="project-card" key={project.id}>
      <div className="project-num">{project.id}</div>
      <div className="project-tag">{project.tag}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
       View GitHub ?
      </a>
     </div>
    ))}
   </div>
  </section>
 );
}

export default Projects;
