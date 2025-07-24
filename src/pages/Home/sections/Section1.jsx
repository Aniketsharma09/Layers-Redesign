import video from "../../../assets/videos/Background-video.mp4";
import "../home.css";
import useSection1Animation from "../sectionAnimations/useSection1Animation";

const Section1 = () => {
  const headingText = "From Unboxing to Building: Tech Content, Startups & You.";
  const subheadingText = "Join Shlok’s journey—where every gadget review sparks the next big idea.";
  const len = headingText.length;

  // Split heading into spans
  const headingSpans = headingText.split("").map((char, index) => (
    <span
      key={index}
      className={index < Math.floor(len / 2) ? "firstPart" : "secondPart"}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  // Split subheading into spans
  const subheadingSpans = subheadingText.split("").map((char, index) => (
    <span key={index} className="subChar">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  // Run animation
  useSection1Animation();

  return (
    <div className="section1">
      <div className="overlay">
        <h2 className="heading">{headingSpans}</h2>
        <h3 className="subheading">{subheadingSpans}</h3>
      </div>
      <video className="video" src={video} muted autoPlay loop />
    </div>
  );
};

export default Section1;
