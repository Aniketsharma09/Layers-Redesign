import ReactPlayer from "react-player";
import { useRef } from "react";
import useSection4Animation from "../sectionAnimations/useSection4Animation";
const Section4 = () => {
    const section4Ref = useRef(null);
    useSection4Animation(section4Ref);
  return (
    <div className="section4" ref={section4Ref}>
      <div className="section4-first-part">
        <h1>latest content</h1>
        <h3>
          Stay updated with my newest videos covering tech reviews,
          entrepreneurship, and behind-the-scenes content
        </h3>
        <ReactPlayer className="react-player"
          src="https://youtu.be/lvt6uv5pnCw?si=ogGUyCkP1LpMCeV-"
          width="90%"
          height="70vh"
          controls
        />
      </div>
      <div className="section4-second-part">
        <h1>join the journey</h1>
        <h3>
          Get exclusive behind-the-scenes content, early access to new products,
          and insights into building successful tech ventures.
        </h3>
        <div className="input-section">
          <div className="input">
            <input placeholder="Enter your email address" />
            <button>Join now</button>
          </div>
          <div className="bottom-part">
                <div className="ele">
                    <i className="ri-eye-line"></i>
                    <h4>behiend the scenes</h4>
                    <p>Exclusive content and insights</p>
                </div>
                <div className="ele">
                   <i className="ri-rocket-2-line"></i>
                    <h4>early access</h4>
                    <p>First to know about new product</p>
                </div>
                <div className="ele">
                    <i className="ri-lightbulb-line"></i>
                    <h4>Learning resources</h4>
                    <p>Tips for tech and entrepreneurship</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
