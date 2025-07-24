import { useRef } from "react";
import useAnarcSection4Animation from "../sections-Animations/useAnarcSection4Animation";

const AnarcSection4 = () => {
  const sectionRef = useRef(null);
  useAnarcSection4Animation(sectionRef);

  return (
    <div className="a-section-4" ref={sectionRef}>

      {/* Added from Section 3 Part 4 */}
      <div className="a-sec4-part1">
        <h1>6-axis motion sensor</h1>
        <h3>ensures accurate data every time</h3>
        <div className="image-container">
          <img src="https://www.layers.shop/cdn/shop/files/HR_3.png?v=1749628514&width=832"/>
          <img src="https://www.layers.shop/cdn/shop/files/Stress_3.png?v=1749628514&width=832"/>
          <img src="https://www.layers.shop/cdn/shop/files/sleep_cd28f13f-31f1-4dda-ad1e-8d12497159e2.png?v=1750222717&width=832"/>
          <img src="https://www.layers.shop/cdn/shop/files/Sp02_3.png?v=1749628514&width=832"/>
          <img src="https://www.layers.shop/cdn/shop/files/Sp02_2.png?v=1749628514&width=832"/>
        </div>
      </div>

      {/* Original Part 1 → Now Part 2 */}
      <div className="a-sec4-part2">
        <img src="https://www.layers.shop/cdn/shop/files/watchface_12_1.png?v=1749728450&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_11_1.png?v=1749728450&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_5_1.png?v=1749728450&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_10_1.png?v=1749728450&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_8_1.png?v=1749728451&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_7_1.png?v=1749728451&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/Group_2.png?v=1751610853&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_9_1.png?v=1749728451&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_4_1.png?v=1749728451&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_3_1.png?v=1749728450&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_2_1.png?v=1749728450&width=832"/>
        <img src="https://www.layers.shop/cdn/shop/files/watchface_1.png?v=1749728451&width=832"/>
        <h1>static. dynamic. analogue.</h1>
        <h3>Your Watchface Says it All Express in 150+ styles</h3>
      </div>

      {/* Original Part 2 → Now Part 3 */}
      <div className="a-sec4-part3">
        <h1>Desined to be different</h1>
        <img src="https://www.layers.shop/cdn/shop/files/VIDEO_PLAY_4a12c12e-be23-477d-8c4b-e854d9bfcf4b.png?v=1751883092&width=1920"/>
      </div>
    </div>
  );
};

export default AnarcSection4;
