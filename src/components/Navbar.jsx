import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderOpen, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <aside className="framer-sidebar desktop-only">
      <ul className="nav-links">
        <li><a href="#home" data-tooltip="Home"><FontAwesomeIcon icon={faHome} /></a></li>
        <li><a href="#about" data-tooltip="About"><FontAwesomeIcon icon={faUser} /></a></li>
        <li><a href="#projects" data-tooltip="Projects"><FontAwesomeIcon icon={faFolderOpen} /></a></li>
        <li><a href="#contact" data-tooltip="Contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        
      </ul>
    </aside>
  );
};

export default Navbar;
