import { lazy, Suspense, useRef } from "react";
const Section1 = lazy(() => import("./Sections/Section1"));
const Section2 = lazy(() => import("./Sections/Section2"));

const OurStory = () => {
  const section2Ref = useRef(null); 

  const scrollToSection2 = () => {
    section2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ourStoryMain">
      <Suspense fallback={<div>Loading Section 1...</div>}>
        <Section1 scrollToSection2={scrollToSection2} />
      </Suspense>
      <Suspense fallback={<div>Loading Section 2...</div>}>
        <div ref={section2Ref}>
          <Section2 />
        </div>
      </Suspense>
    </div>
  );
};

export default OurStory;
