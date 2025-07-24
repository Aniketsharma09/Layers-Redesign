import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Nav.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    tl.from('.logo', { opacity: 0, y: -50, duration: 0.2 });
    tl.from('.navlink', { opacity: 0, y: -50, duration: 0.4, stagger: 0.2 });
    tl.from('.loginBtn', { opacity: 0, y: -50, duration: 0.2 });
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false); // close menu on nav click
  };

  return (
    <div className='nav'>
      <div className='container nav-container'>
        <NavLink to='/' onClick={handleNavClick}>
          <img className='logo' src={logo} alt='logo' />
        </NavLink>

        <div className='nav-center'>
          <NavLink to='/anarc-watch' onClick={handleNavClick} className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Anarc Watch
          </NavLink>
          <NavLink to='/products' onClick={handleNavClick} className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Product
          </NavLink>
          <NavLink to='/our-story' onClick={handleNavClick} className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
            Our Story
          </NavLink>
        </div>

        <NavLink to='/login' onClick={handleNavClick} className={({ isActive }) => isActive ? 'loginBtn active' : 'loginBtn'}>
          Login
        </NavLink>

        {/* Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={() => setMenuOpen(true)}>
          <i className="ri-menu-line"></i>
        </div>

        {/* Mobile Sidebar */}
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <i className="ri-close-line"></i>
          </div>
          <NavLink to='/anarc-watch' onClick={handleNavClick} className='navlink'>Anarc Watch</NavLink>
          <NavLink to='/products' onClick={handleNavClick} className='navlink'>Product</NavLink>
          <NavLink to='/our-story' onClick={handleNavClick} className='navlink'>Our Story</NavLink>
          <NavLink to='/login' onClick={handleNavClick} className='loginBtn'>Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
