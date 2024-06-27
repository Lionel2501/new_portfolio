// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggle, setToggle }) => {
  
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`} id="navbar-collapse-toggle">
      <div className="navbar-brand">
        <a className="logo-text">
          Lionel
        </a>
      </div>
      <ul className="nav nav-ul">
        <li>
          <a className="nav-link" href="/" onClick={(e) => handleNavClick(e, 'home')}>
            <i className="fas fa-house-damage" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a className="nav-link" href="/experience" onClick={(e) => handleNavClick(e, 'experience')}>
            <i className="fas fa-concierge-bell" />
            <span>Experiencia</span>
          </a>
        </li>
        <li>
          <a className="nav-link" href="/skills" onClick={(e) => handleNavClick(e, 'skills')}>
            <i className="fas fa-concierge-bell" />
            <span>Tecnologías</span>
          </a>
        </li>
        <li>
          <a className="nav-link" href="/about" onClick={(e) => handleNavClick(e, 'about')}>
            <i className="far fa-address-card" />
            <span>About Me</span>
          </a>
        </li>
        <li>
          <a className="nav-link" href="/work" onClick={(e) => handleNavClick(e, 'work')}>
            <i className="fas fa-briefcase" />
            <span>Portfolio</span>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
