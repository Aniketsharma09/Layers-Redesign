import { useLayoutEffect } from "react";
import gsap from "gsap";

const useSection1Animation = (containerRef) => {
  useLayoutEffect(() => {
    if (!containerRef?.current) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;

      // Reset buttons
      gsap.set(container.querySelectorAll(".button-cont button"), {
        opacity: 1,
        clearProps: "all",
      });

      const animateLetters = (selector, yOffset, delay = 0) => {
        const el = container.querySelector(selector);
        if (el && !el.dataset.animated) {
          const letters = el.textContent.split("");
          el.innerHTML = letters.map((l) => `<span class="letter">${l}</span>`).join("");
          el.dataset.animated = "true";
          gsap.from(el.querySelectorAll(".letter"), {
            y: yOffset,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: "power3.out",
            delay,
          });
        }
      };

      animateLetters(".info-div h3", -30, 0);
      animateLetters(".info-div h1", -40, 0.3);
      animateLetters(".info-div h2", -30, 0.6);

      gsap.fromTo(
        container.querySelector(".info-div p"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );

      gsap.fromTo(
        container.querySelectorAll(".button-cont button"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 1.3,
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        container.querySelectorAll(".content-info .cont-info"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          delay: 1.8,
        }
      );

      gsap.fromTo(
        container.querySelector(".ourStory-section1 img"),
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

export default useSection1Animation;
