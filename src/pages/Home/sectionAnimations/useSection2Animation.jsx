import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useSection2Animation = () => {
  useEffect(() => {
    // Animate the cards
    gsap.from(".innerpart .elem", {
      y: -100,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        toggleActions: "restart none none reset", 
        // restart animation every time it enters
      },
    });

    // Number count-up animation
    document.querySelectorAll(".innerpart .elem h3").forEach((h3) => {
      const text = h3.dataset.value || h3.textContent.trim();
      const finalNumber = parseFloat(text);
      const suffix = text.replace(/[0-9.]/g, "");
      h3.dataset.value = text; // store original value

      const counterObj = { val: 0 };

      ScrollTrigger.create({
        trigger: ".section2",
        start: "top 90%",
        onEnter: () => {
          gsap.to(counterObj, {
            val: finalNumber,
            duration: 2,
            ease: "power1.out",
            onUpdate: () => {
              h3.textContent =
                finalNumber % 1 !== 0
                  ? counterObj.val.toFixed(1) + suffix
                  : Math.floor(counterObj.val) + suffix;
            },
          });
        },
        onLeaveBack: () => {
          // Reset to 0 when scrolling up out of view
          counterObj.val = 0;
          h3.textContent = "0" + suffix;
        },
      });
    });
  }, []);
};

export default useSection2Animation;
