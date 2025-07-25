import { useRef } from "react";
import "../ourStory.css";
import useSection1Animation from "../SectionAnimations/useSection1Animation";
import { useNavigate } from "react-router-dom";

const Section1 = ({ scrollToSection2 }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useSection1Animation(containerRef);

  return (
    <div className="ourStory-section1" ref={containerRef}>
      <div className="info-div">
        <h3>content creator & entrepreneur</h3>
        <h1>
          hi , i'm <span>shlok</span>
        </h1>
        <h2>turning ideas into reality</h2>
        <p>
          From unboxing the latest tech to building startups that matter. Join
          me on this journey of innovation, creation, and making an impact in
          the digital world.
        </p>

        <div className="button-cont">
          <button onClick={scrollToSection2}>explore my journey</button>
          <button onClick={() => navigate("/products")}>view products</button>
        </div>

        <div className="content-info">
          <div className="cont-info">
            <h1>12M +</h1>
            <h5>subscribers</h5>
          </div>
          <div className="cont-info">
            <h1>3</h1>
            <h5>startups</h5>
          </div>
          <div className="cont-info">
            <h1>100 +</h1>
            <h5>collaborations</h5>
          </div>
        </div>
      </div>

      <img
        src="https://www.layers.shop/cdn/shop/files/gallery_img4.webp?v=1725254041"
        alt="Shlok"
      />
    </div>
  );
};

export default Section1;
