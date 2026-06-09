import "../styles/Skills.css";

const skills = [
 {
  name: "HTML & CSS",
  level: "Proficient",
  width: 90
 },
 {
  name: "JavaScript",
  level: "Intermediate",
  width: 75
 },
 {
  name: "React",
  level: "Intermediate",
  width: 70
 },
 {
  name: "Git & GitHub",
  level: "Intermediate",
  width: 80
 },
 {
  name: "Python",
  level: "Learning",
  width: 55
 },
 {
  name: "UI/UX Design",
  level: "Learning",
  width: 60
 }
];

function Skills() {
 return (
  <section id="skills">
   <div className="section-label">Skills</div>
   <h2 className="section-title">
    What I work<br />
    <em>with</em>
   </h2>

   <div className="skills-grid">
    {skills.map((skill) => (
     <div className="skill-item" key={skill.name}>
      <div className="skill-icon">•</div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-level">{skill.level}</div>
      <div className="skill-bar">
       <div className="skill-bar-fill" style={{ width: `${skill.width}%` }} />
      </div>
     </div>
    ))}
   </div>
  </section>
 );
}

export default Skills;
