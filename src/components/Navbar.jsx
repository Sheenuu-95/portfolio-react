import "../styles/Navbar.css";
import {
 FaGithub,
 FaInstagram,
 FaLinkedin,
 FaWhatsapp
} from "react-icons/fa";

function Navbar() {
 return (
  <nav>
   <a className="nav-logo" href="#home">
    Sarthak Singh
   </a>

   <ul className="nav-links">
    <li><a href="#home" className="active">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
   </ul>

   <div className="socials">
    <a href="https://github.com/Sheenuu-95" target="_blank" rel="noreferrer" title="GitHub">
      <FaGithub />
    </a>
    <a href="https://www.instagram.com/sheenu.uu/" target="_blank" rel="noreferrer" title="Instagram">
      <FaInstagram />
    </a>
    <a href="https://wa.me/918447374818" target="_blank" rel="noreferrer" title="WhatsApp">
      <FaWhatsapp />
    </a>
    <a href="https://www.linkedin.com/in/sarthak-singh-95/" target="_blank" rel="noreferrer" title="LinkedIn">
      <FaLinkedin />
    </a>
   </div>
  </nav>
 );
}

export default Navbar;
