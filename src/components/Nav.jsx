import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Nav.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Nav = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    // Animate the logo
    tl.from('.logo', {
      opacity: 0,
      y: -50,
      duration: 0.2
    });

    // Animate nav links one by one
    tl.from('.navlink', {
      opacity: 0,
      y: -50,
      duration: 0.4,
      stagger: 0.2
    });

    // Animate login button last
    tl.from('.loginBtn', {
      opacity: 0,
      y: -50,
      duration: 0.2
    });

  });

  return (
   <div className='nav'>
  <NavLink to='/'>
    <img className='logo' src={logo} alt='logo image' />
  </NavLink>
  <div className='nav-center'>
    <NavLink 
      to='/anarc-watch' 
      className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
    >
      Anarc Watch
    </NavLink>
    <NavLink 
      to='/products' 
      className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
    >
      Product
    </NavLink>
    <NavLink 
      to='/our-story' 
      className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}
    >
      Our Story
    </NavLink>
  </div>
  <NavLink 
    to='/login' 
    className={({ isActive }) => isActive ? 'loginBtn active' : 'loginBtn'}
  >
    Login
  </NavLink>
</div>

  );
};

export default Nav;
