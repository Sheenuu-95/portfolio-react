import "../styles/About.css";
function About() {
 return (
  <section id="about">
   <div className="section-label">About Me</div>
   <h2 className="section-title">
    A little about<br />
    <em>who I am</em>
   </h2>

   <div className="about-grid">
    <div className="about-text">
     <p>
      Hi there! 
     </p>
     <p>
        I'm Sarthak Singh - a passionate and curious fresher stepping into the world of technology and design. I love creating things that live on the internet, and I'm constantly learning new skills to grow as a developer.
     </p>
     <p>
      My schooling was completed at KVS Rangpuri, and I graduated with a BCA degree. I believe in writing clean code, crafting thoughtful user experiences, and building projects that make a genuine difference.
     </p>
     <p>
      When I'm not coding, you'll find me exploring ideas, collaborating with others, and pushing my limits. I'm actively looking for opportunities to apply my skills and grow within a team.
     </p>
    </div>
    <br></br>
    <div className="about-stats">
     <div className="stat-card">
      <div className="stat-num"><b>04+ Projects Built</b></div>
      <div className="stat-label">.</div>
     </div>
     <div className="stat-card">
      <div className="stat-num"><b>08 Skills Learned</b></div>
      <div className="stat-label">.</div>
     </div>
     <div className="stat-card">
      <div className="stat-num"><b>∞ Curiosity</b></div>
      <div className="stat-label">.</div>
     </div>
     <div className="stat-card">
      <div className="stat-num"><b>1 Goal: Excellence</b></div>
      <div className="stat-label">.</div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default About;
