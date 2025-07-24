import './footer.css';
import { useRef } from 'react';
import logo from '../assets/logo.svg'
import useFooterAnimation from './useFooterAnimation';
const Footer = () => {
    const footerRef = useRef(null);
  useFooterAnimation(footerRef);
  return (
    <div className='footer' ref={footerRef}>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <div className='top-left-top'>
                    <img src={logo}/>
                </div>
                <div className='top-left-bottom'>
                    <h5>about</h5>
                    <h5>blog</h5>
                    <h5>menu</h5>
                    <h5>services</h5>
                    <h5>FAQ</h5>
                    <h5>support</h5>
                </div>
            </div>
            <div className='footer-top-right'>
                <h3><i className="ri-map-pin-2-line"></i> 123 street name, city name ,state, country 12345</h3>
                <h2>can you put your email here ?</h2>
                <div className='inputDiv'>
                <input placeholder='write email here '/>
                <button>subscribe</button>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='left'>
                <p>privacy police</p>
                <p>our history</p>
                <p>what we do</p>
            </div>
            <div className='right'>
                <p>Copyright © 2025, Layers. All right's reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer