import { useRef } from "react";
import "../anarchWatch.css";
import useAnarcSection1Animation from "../sections-Animations/useAnarcSection1Animation";

const AnarcSection1 = () => {
  const sectionRef = useRef(null);
useAnarcSection1Animation(sectionRef)
  return (
     <div className="first-pro-anarc" ref={sectionRef}>
        <div className='fist-pro-left'>
            <h1>Designed in London. <br/>Made for India.</h1>
            <h2>Beauty and geometry come together to create Anarc’s unique octagonal dial</h2>
            <div className='logo-first'></div>
            <div className='logo-second'>
              <h1>anarc</h1>
            </div>
            <div className='logo-third'></div>
            <h3 className='bottom-text'>powerfull. accurate. unique</h3>
        </div>
        <img src='https://www.layers.shop/cdn/shop/files/336_1_5.webp?v=1731325519'/>
      </div>
  );
};

export default AnarcSection1;
