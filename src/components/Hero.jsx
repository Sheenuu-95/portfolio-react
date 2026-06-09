import "../styles/Hero.css";

function Hero() {
 return (
  <section id="home" className="hero">
   <div className="hero-bg"></div>
   <div className="hero-grain"></div>

   <div className="hero-content">
    <div className="hero-eyebrow">Student &amp; Fresher</div>
    <h1 className="hero-title">
      Hi, I'm <em>Sarthak Singh</em>
    </h1>
    <p className="hero-sub">
      Passionate about building meaningful digital experiences. Currently exploring the world of development, design, and technology — one project at a time.
    </p>
    <a href="#projects" className="hero-cta">
      View My Work
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
   </div>

   <div className="hero-socials">
    <a href="https://www.instagram.com/sheenu.uu/" target="_blank" rel="noreferrer" title="Instagram">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    </a>
    <a href="https://github.com/Sheenuu-95" target="_blank" rel="noreferrer" title="GitHub">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    </a>
    <a href="https://wa.me/918447374818" target="_blank" rel="noreferrer" title="WhatsApp">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    </a>
   </div>
  </section>
 );
}

export default Hero;
