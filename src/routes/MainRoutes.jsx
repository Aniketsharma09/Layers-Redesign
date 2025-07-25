import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("../pages/Home/Home"));
const AnarcWatch = lazy(() => import("../pages/Anarc-Watch/AnarcWatch"));
const Products = lazy(() => import("../pages/Products/Products"));
const ProductDetails = lazy(() =>
  import("../pages/Product-Detail/ProductDetails")
);
const OurStory = lazy(() => import("../pages/Our-Story/OurStory"));
const Login = lazy(() => import("../pages/LoginPage/Login"));
const SignUp = lazy(() => import("../pages/SignUpPage/SignUp"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anarc-watch" element={<AnarcWatch />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ScrollToTop /> 
    </Suspense>
  );
};

export default MainRoutes;
