import { useLayoutEffect } from "react";
import gsap from "gsap";

const useSection1Animation = (containerRef) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // RESET all buttons and elements
      gsap.set(".info-div .button-cont button", { opacity: 1, clearProps: "all" });

      /** --- Animate h3 letter-by-letter --- **/
      const h3Element = document.querySelector(".info-div h3");
      if (h3Element && !h3Element.dataset.animated) {
        const letters = h3Element.textContent.split("");
        h3Element.innerHTML = letters.map(l => `<span class="letter">${l}</span>`).join("");
        h3Element.dataset.animated = "true"; // prevent multiple splits
        gsap.from(".info-div h3 .letter", {
          y: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      /** --- Animate h1 letter-by-letter --- **/
      const h1Element = document.querySelector(".info-div h1");
      if (h1Element && !h1Element.dataset.animated) {
        const letters = h1Element.textContent.split("");
        h1Element.innerHTML = letters.map(l => `<span class="letter">${l}</span>`).join("");
        h1Element.dataset.animated = "true";
        gsap.from(".info-div h1 .letter", {
          y: -40,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      /** --- Animate h2 letter-by-letter --- **/
      const h2Element = document.querySelector(".info-div h2");
      if (h2Element && !h2Element.dataset.animated) {
        const letters = h2Element.textContent.split("");
        h2Element.innerHTML = letters.map(l => `<span class="letter">${l}</span>`).join("");
        h2Element.dataset.animated = "true";
        gsap.from(".info-div h2 .letter", {
          y: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.6,
        });
      }

      /** --- Animate paragraph --- **/
      gsap.fromTo(
        ".info-div p",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 }
      );

      /** --- Animate buttons --- **/
      gsap.fromTo(
        ".info-div .button-cont button",
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

      /** --- Animate content-info --- **/
      gsap.fromTo(
        ".info-div .content-info .cont-info",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out", delay: 1.8 }
      );

      /** --- Animate image --- **/
      gsap.fromTo(
        ".section1 img",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
};

export default useSection1Animation;
