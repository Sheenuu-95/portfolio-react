import "../styles/Contact.css";

function Contact() {
 return (
  <section id="contact">
   <div className="section-label">Contact</div>
   <h2 className="section-title">
    Let&apos;s<br />
    <em>connect</em>
   </h2>

   <div className="contact-grid">
    <div className="contact-info">
     <p>
      I'm always open to new opportunities, collaborations, or just a friendly conversation. Feel free to reach out through any of these platforms!
     </p>
     <div className="contact-socials">
      <a className="contact-social-btn" href="https://www.instagram.com/sheenu.uu/" target="_blank" rel="noreferrer">
       Instagram
      </a>
      <a className="contact-social-btn" href="https://github.com/Sheenuu-95" target="_blank" rel="noreferrer">
       GitHub
      </a>
      <a className="contact-social-btn" href="https://wa.me/918447374818" target="_blank" rel="noreferrer">
       WhatsApp
      </a>
     </div>
    </div>
    <div className="contact-form-card">
     <form className="contact-form">
      <div className="form-group">
       <label htmlFor="name">Name</label>
       <input id="name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-group">
       <label htmlFor="email">Email</label>
       <input id="email" type="email" placeholder="your@email.com" required />
      </div>
      <div className="form-group">
       <label htmlFor="message">Message</label>
       <textarea id="message" rows="5" placeholder="What&apos;s on your mind?" required />
      </div>
      <button type="submit" className="form-submit">
       Send Message →
      </button>
     </form>
    </div>
   </div>
  </section>
 );
}

export default Contact;
