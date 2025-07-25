// hooks/useSection2Animation.js
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSection2Animation = (containerRef) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const section = containerRef.current;
      if (!section) return;

      const carts = section.querySelectorAll(".jorney-cart");
      const line = section.querySelector(".line");

      carts.forEach((cart, index) => {
        const isEven = (index + 1) % 2 === 0;

        gsap.fromTo(
          cart,
          { x: isEven ? 200 : -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cart,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        const content = cart.querySelector(".jorCart-bottom");
        if (content) {
          gsap.fromTo(
            content,
            { y: -50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cart,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      if (line) {
        gsap.fromTo(
          line,
          { height: "20px" },
          {
            height: "95%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert(); // ✅ Revert all animations & ScrollTriggers on unmount
    };
  }, [containerRef]);
};

export default useSection2Animation;
