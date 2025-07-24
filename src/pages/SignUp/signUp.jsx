import { useLayoutEffect, useRef } from 'react';
import '../Login/login.css';
import logo from '../../assets/logo.svg';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Logo image
      gsap.from(".logo-cont img", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Logo text
      gsap.from(".logo-cont h1", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // Login heading
      gsap.from(".login-form h1", {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      // Input fields
      gsap.from(".login-form input", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        delay: 0.7,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Login button
      gsap.from(".login-form button", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        delay: 1.3,
        ease: "power3.out",
      });

      // Newly added h2 animation
      gsap.from(".login-form h2", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        delay: 1.6,
        ease: "power3.out",
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup animations on unmount
  }, []);

  return (
    <div className="login-main" ref={containerRef}>
      <div className="login-container">
        <div className="logo-cont">
          <img src={logo} alt="Logo" />
          <h1>time to #chasechaos</h1>
        </div>
        <form className="login-form">
          <h1>signup</h1>
          <input placeholder="E-mail" />
          <input placeholder="password" type="password" />
          <input placeholder="repeat password" type="password" />
          <button className="btn" type="button">signup</button>
          <h2>
            already have an account <span onClick={() => navigate('/login')}>click here</span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUp;