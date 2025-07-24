import { lazy, Suspense } from "react";
import "./home.css"; 
const Section1 = lazy(() => import("./sections/Section1"));
const Section2 = lazy(() => import("./sections/Section2"));
const Section3 = lazy(() => import("./sections/Section3"));
const Section4 = lazy(() => import("./sections/Section4"));

const Home = () => {
  return (
    <div className="home">
      <Suspense fallback={<div className="loader">Loading Section 1...</div>}>
        <Section1 />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Section 2...</div>}>
        <Section2 />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Section 3...</div>}>
        <Section3 />
      </Suspense>

      <Suspense fallback={<div className="loader">Loading Section 4...</div>}>
        <Section4 />
      </Suspense>
    </div>
  );
};

export default Home;
