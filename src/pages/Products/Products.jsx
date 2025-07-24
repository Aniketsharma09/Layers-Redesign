import { useContext, useRef } from 'react';
import './products.css';
import { ProductContext } from '../../context/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import useProductsAnimation from './useProductsAnimation';

const Products = () => {
  const { products } = useContext(ProductContext);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();
  useProductsAnimation(titleRef, cardsRef, [products]);

  const productCarts = products.map((product, index) => (
    <Link
      to={`/product-detail/${product.id}`}
      key={product.id}
      ref={(el) => (cardsRef.current[index] = el)}
      className="productCart"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <img src={product.images[0]} className="product-img" alt={product.name} />
      <div className="product-name-price">
        <h2>{product.name}</h2>
        <h3>
          ₹<span>{(product.price * 1.2).toFixed(2)}</span> ₹ {product.price}
        </h3>
      </div>
    </Link>
  ));

  return (
    <div className="product-main">
      <div className="first-pro" onClick={() => navigate('/anarc-watch')}>
        <h1 ref={titleRef}>Anarc Smartwatch</h1>
        <div className="image-cover"></div>
        <img
          src="https://www.layers.shop/cdn/shop/files/Frame_1984077863.webp?v=1731475175&width=1500"
          alt="Main"
        />
      </div>
      <div className="product-container">{productCarts}</div>
    </div>
  );
};

export default Products;
