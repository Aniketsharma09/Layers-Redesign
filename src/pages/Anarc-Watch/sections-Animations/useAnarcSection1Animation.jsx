import { useLayoutEffect } from "react";
import gsap from "gsap";

const useAnarcSection1Animation = (sectionRef) => {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

      // Animate only text elements (excluding logo divs)
      tl.from(".fist-pro-left h1, .fist-pro-left h2, .fist-pro-left h3", {
        opacity: 0,
        x: -50,
        stagger: 0.2 // text elements come in sequence
      });

      // Image animation
      tl.from("img", {
        opacity: 0,
        x: 50
      }, "-=0.6"); // Overlap slightly
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, [sectionRef]);
};

export default useAnarcSection1Animation;
