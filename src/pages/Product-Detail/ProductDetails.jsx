import { useParams } from 'react-router-dom';
import './productDetails.css';
import { useContext, useRef, useState } from 'react';
import ProductContext from '../../context/ProductContextOnly';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useProductDetailsAnimation from './useProductDetailsAnimation';

const ProductDetails = () => {
  const [num, setNum] = useState(1);
  const { id } = useParams();   
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === Number(id));
  const imageRef = useRef(null);
  const detailRef = useRef(null);
  const bottomHeadingRef = useRef(null);
  const specRefs = useRef([]);

  useProductDetailsAnimation(imageRef, detailRef, bottomHeadingRef, specRefs);

  if (!product) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Product not found.</p>;
  }

  const increaseHandler = () => setNum((prev) => prev + 1);
  const decreaseHandler = () => setNum((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="productDetails-main">
      <div className="proDet-top">
       
        <div className="top-left" ref={imageRef}>
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
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`Product ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right - Product Details */}
        <div className="top-right" ref={detailRef}>
          <h1>{product.name}</h1>
          {product?.material && <p>{product.material}</p>}
          <h2><span>₹{(product.price * 1.2).toFixed(2)}</span> ₹{product.price}</h2>
          <h3>MRP (inclusive of all taxes)</h3>
          <h4>{product.color}</h4>
          <div className='quantity'>
            <h5 onClick={decreaseHandler}>-</h5>
            <h5>{num}</h5>
            <h5 onClick={increaseHandler}>+</h5>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='proDet-bottom'>
        <h1 ref={bottomHeadingRef}>More Details</h1>
        <div className='bot-top'>
          <div className='bot-top-inner' ref={(el) => (specRefs.current[0] = el)}>
            <h2>Variant</h2>
            <p>{product.name}</p>
            <h2>Net Quantity</h2>
            <p>1 unit</p>
            <h2>Manufactured By</h2>
            <p>East Apex (Guangzhou) Co., Ltd.</p>
            <h2>Address</h2>
            <p>Rm 1702, 1704, 1706, No. 30, Kaitai Avenue, Huangpu District, Guangzhou, China</p>
            <h2>Month & Year of Manufacture</h2>
            <p>April 2025</p>
          </div>

          <div className='bot-top-inner' ref={(el) => (specRefs.current[1] = el)}>
            {product?.material && (
              <>
                <h2>Material</h2>
                <p>{product.material}</p>
              </>
            )}
            <h2>Box Contents</h2>
            <p>1N Strap</p>
            <h2>Import & Marketed By</h2>
            <p>Layers Electronics Private Limited</p>
            <h2>Address</h2>
            <p>R6th, Office No 1617, Logix City Centre, Sector 32, Noida, Uttar Pradesh, 201301</p>
            <h2>Email</h2>
            <p>support@layers.shop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
