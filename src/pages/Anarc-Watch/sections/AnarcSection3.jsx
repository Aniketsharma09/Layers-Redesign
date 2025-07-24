import { useRef } from "react";
import useAnarcSection3Animation from "../sections-Animations/useAnarcSection3Animation";

const AnarcSection3 = () => {
  const sectionRef = useRef(null);
  useAnarcSection3Animation(sectionRef);

  return (
    <div className="anarch-section-3" ref={sectionRef}>
      <div className="a-sec-part1">
        <img src="https://www.layers.shop/cdn/shop/files/Layers_Chipset_Render_Without_Background_1_5.png?v=1749727229&width=832" />
        <div className="sec-top-right">
          <img src="https://www.layers.shop/cdn/shop/files/Chipset_icon_3.png?v=1749727304&width=832" />
          <h1>Powered by HiSilicon</h1>
          <h3>lag-free navigation</h3>
          <h3>reliable tracking</h3>
          <h3>power-efficient speed</h3>
        </div>
      </div>
      <div className="a-sec-part2">
        <h1>Illuminate every detail</h1>
        <h2>
          A 700 nits display and 60 Hz refersh rate that that shines through
          even brigth sunlight.
        </h2>
        <video
          src="https://cdn.shopify.com/videos/c/o/v/15828254ce7445c2b2855ef8476a3c83.webm"
          muted
          autoPlay
          loop
        />
        <video
          src="https://cdn.shopify.com/videos/c/o/v/24c1dfbbf44d48e9af65219b60dcd515.mp4"
          muted
          autoPlay
          loop
        />
        <video
          src="https://cdn.shopify.com/videos/c/o/v/57afdf920dba4fcaa11f2c01cb5e833d.webm"
          muted
          autoPlay
          loop
        />
      </div>
      <div className="a-sec-part3">
        <div className="part3-left">
          <div className="part3-left-top">
            <h1>A 350 mAh battery</h1>
            <h2>that lets you chese chaos without running out of power</h2>
          </div>
          <div className="part3-left-bottom">
            <h3>120 hours</h3>
            <p>of Normal Use</p>
            <h3>336 hours</h3>
            <p>of Power Saving Mode</p>
            <h3>48 hour</h3>
            <p>of AOD Mode</p>
          </div>
        </div>
        <video
          src="https://www.layers.shop/cdn/shop/videos/c/vp/373cb70f3fd846d2af68c89306cfabe7/373cb70f3fd846d2af68c89306cfabe7.HD-1080p-4.8Mbps-50294183.mp4?v=0"
          muted
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

export default AnarcSection3;
