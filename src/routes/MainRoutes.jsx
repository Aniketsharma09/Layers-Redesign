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
const Login = lazy(() => import("../pages/Login/login"));
const SignUp = lazy(() => import("../pages/SignUP/signUp"));

const MainRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/anarc-watch"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AnarcWatch />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/our-story"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <OurStory />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signUp"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
