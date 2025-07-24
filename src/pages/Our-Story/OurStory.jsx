import React, { lazy, Suspense } from "react";
const Section1 = lazy(() => import("./Sections/Section1"));
const Section2 = lazy(() => import("./Sections/Section2"));

const OurStory = () => {
  return (
    <div className="ourStoryMain">
      <Suspense fallback={<div>Loading Section 1...</div>}>
        <Section1 />
      </Suspense>
      <Suspense fallback={<div>Loading Section 2...</div>}>
        <Section2 />
      </Suspense>
    </div>
  );
};

export default OurStory;
