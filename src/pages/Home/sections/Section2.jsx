import "../home.css";
import youtubeImg from "../../../assets/images/youtube.png";
import startupImg from "../../../assets/images/startup.png";
import colaborationImg from "../../../assets/images/collaboration.png";
import useSection2Animation from "../sectionAnimations/useSection2Animation";

const Section2 = () => {
  useSection2Animation();

  return (
    <div className="section2">
      <h2>Building the future one review at a time</h2>
      <div className="innerpart">
        <div className="elem">
          <img src={youtubeImg} alt="youtube icon" />
          <h3>12.3M +</h3>
          <p>youtube subscribers</p>
        </div>
        <div className="elem secondElem">
          <img src={startupImg} alt="startup icon" />
          <h3>2 +</h3>
          <p>startups launched</p>
        </div>
        <div className="elem thirdElem">
          <img src={colaborationImg} alt="collaboration icon" />
          <h3>100 +</h3>
          <p>collaboration</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
