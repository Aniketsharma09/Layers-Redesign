import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "../anarchWatch.css"; // Ensure CSS is applied
import { useRef } from "react";
import useAnarcSection2Animation from "../sections-Animations/useAnarcSection2Animation";

const AnarcSection2 = () => {
  const productImages = [
    "https://www.layers.shop/cdn/shop/files/Image_4.png?v=1751618050&width=800",
    "https://www.layers.shop/cdn/shop/files/Group_2085662909_b686a4f5-e704-4ade-8a42-e7c7085a4f23.png?v=1751618050&width=800",
    "https://www.layers.shop/cdn/shop/files/Rectangle_147038_140df2b3-307f-4fa8-8603-e690385f9da3.png?v=1751618050&width=800",
  ];
  const section2Ref = useRef(null);
  useAnarcSection2Animation(section2Ref);

  return (
    <div className="anarcsection2" ref={section2Ref}>
      <div className="section2-top">
        {/* LEFT: Image Slider */}
        <div className="section2-left">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="product-slider"
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Product ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT: Product Details */}
        <div className="section2-right">
          <h1>Anarc Smartwatch</h1>
          <h2>₹ 6299  <span>₹8990</span></h2>
          <h3>(MRP Inclusive of all taxes)</h3>
            <h2>key features</h2>
            <h4><i className="ri-quill-pen-ai-fill"></i> Designed in London by Seymourpowell</h4>
            <h4><i className="ri-wireless-charging-line"></i> Forged in medical-grade Stainless Steel</h4>
            <h4><i className="ri-fullscreen-line"></i>1.85" 60Hz AMOLED display</h4>
            <h4><i className="ri-table-alt-line"></i> Powerd by HiSilion chipest</h4>
            <h4><i className="ri-battery-charge-line"></i> Upto 90 hours Battery</h4>
          <button className="buy-btn">Add to Cart</button>
        </div>
      </div>
      <div className="section2-bottom">
        <div className="bottom-left">
            <div className="bottom-left-parts">
                <div className="bottom-inner">
                <img src="https://www.layers.shop/cdn/shop/files/Group_2085662577_2.png?v=1750846242"/>
                <h4>1 year warranty</h4>
                </div>
                <div className="bottom-inner">
                <img src="https://www.layers.shop/cdn/shop/files/Group_2085662576_2.png?v=1750846480"/>
                <h4>7 Day Replacement</h4>
                </div>
                
            </div>
            <div className="bottom-left-parts">
                <div className="bottom-inner">
                <img src="https://www.layers.shop/cdn/shop/files/hugeicons_delivery-sent-02_1.png?v=1750846493"/>
                <h4>Free Delivery</h4>
                </div>
                <div className="bottom-inner margin-right">
                <img src="https://www.layers.shop/cdn/shop/files/icons8-rupee-48.png?v=1749187155"/>
                <h4>COD</h4>
                </div>
                
            </div>
            <div className="bottom-left-parts">
                <div className="bottom-inner">
                <img src="https://www.layers.shop/cdn/shop/files/f7_creditcard_2.png?v=1750846271"/>
                <h4>NO Cost EMI</h4>
                </div>
                <div className="bottom-inner">
                <img src="https://www.layers.shop/cdn/shop/files/solar_headphones-round-linear.png?v=1750846521"/>
                <h4>24*7 Customer Support</h4>
                </div>
                
            </div>
        </div>
        <img src="https://www.layers.shop/cdn/shop/files/Group_67_1.png?v=1751622115"/>
      </div>
    </div>
  );
};

export default AnarcSection2;
