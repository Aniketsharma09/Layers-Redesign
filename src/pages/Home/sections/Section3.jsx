import "../home.css";
import { useRef } from "react";
import useSection3Animation from "../sectionAnimations/useSection3Animation";

const Section3 = () => {
  const section3Ref = useRef(null);
  useSection3Animation(section3Ref);

  return (
    <div className="section3" ref={section3Ref}>
      <h1>featured products</h1>
      <h2>turning ideas into reality, one startup at a time</h2>
      <div className="first-product">
        <div className="first-product-left">
          <h1>anarc smartwatch</h1>
          <div className="watchDetail">
            <h3>chip</h3>
            <p>Hisilicon</p>
          </div>
          <div className="watchDetail">
            <h3>sensors</h3>
            <p>
              Accelerometer (6 Axis Sensor) Gyroscope Heart Rate Sensor SpO2
              Sensor
            </p>
          </div>
          <div className="watchDetail">
            <h3>Health and Wellness</h3>
            <p>
              Heart Rate SpO2 Sleep Tracking Stress Breathing Layers Watch App
            </p>
          </div>
          <div className="watchDetail">
            <h3>Display</h3>
            <p>
              1.85” AMOLED Display 60Hz Refresh Rate 700 Nits Peak Brightness
            </p>
          </div>
          <div className="watchDetail">
            <h3>Audio</h3>
            <p>BT Calling Noise Cancellation TWS Connectivity</p>
          </div>
          <div className="watchDetail">
            <h3>Power and Battery life</h3>
            <p>350mAh, Lasts up to 7 Days</p>
          </div>
        </div>
        <div className="first-product-right">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/448e536db93240bcbd5697edfacdfa6a.webm"
            muted
            autoPlay
            loop
          />
        </div>
      </div>
      <div className="second-product">
        <div className="second-product-inner sec-pro-first">
            <h1>Mobile skin</h1>
            <h3>Because naked phone is boring</h3>
        </div>
        <div className="second-product-inner sec-pro-second">
            <h1>Anarc Straps</h1>
            <h3>Strips that match your vibe</h3>
        </div>
        <div className="second-product-inner sec-pro-third">
            <h1>Laptop/Tablets Skins</h1>
            <h3>style you laptop and tablet effotlessly</h3>
        </div>
      </div>
    </div>
  );
};

export default Section3;
