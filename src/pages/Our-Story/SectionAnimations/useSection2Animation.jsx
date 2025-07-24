// hooks/useJourneyAnimation.js
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSection2Animation = (containerRef) => {
  useGSAP(() => {
    const section = containerRef.current;
    const carts = section?.querySelectorAll(".jorney-cart");
    const line = section?.querySelector(".line");

    // Animate each journey cart
    carts?.forEach((cart, index) => {
      const isEven = (index + 1) % 2 === 0;

      gsap.from(cart, {
        x: isEven ? 200 : -200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cart,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      const content = cart.querySelector(".jorCart-bottom");
      if (content) {
        gsap.from(content, {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cart,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Animate the vertical line slowly as user scrolls through the entire sec2-jurney
    if (line) {
      gsap.fromTo(
        line,
        { height: "20px" },
        {
          height: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: section.querySelector(".sec2-jurney"),
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, { scope: containerRef });
};

export default useSection2Animation;useSection2Animation