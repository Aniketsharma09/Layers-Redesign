import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSection3Animation = (section3Ref) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section3 h1, .section3 h2", {
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          once: false,
        },
        opacity: 0,
        y: -50,
        duration: 0.6,
        stagger: 0.2,
      });

      
      const firstProductTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".first-product",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          once: false,
        },
      });

      firstProductTl
        .from(".first-product-left", {
          opacity: 0,
          x: -80,
          duration: 0.6,
        })
        .from(
          ".first-product-right",
          {
            opacity: 0,
            x: 80,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(".watchDetail h3", {
          opacity: 0,
          y: -20,
          duration: 0.3,
          stagger: 0.1,
        })
        .from(".watchDetail p", {
          opacity: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.1,
        });

      gsap.utils.toArray(".second-product-inner").forEach((card, i) => {
        // Set initial state
        gsap.set(card, { opacity: 0, x: -80 });
        gsap.set(card.querySelector("h1"), { opacity: 0, y: -30 });
        gsap.set(card.querySelector("h3"), { opacity: 0, y: -20 });

        // Animate card
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: i * 0.2,
        });

        // Animate h1
        gsap.to(card.querySelector("h1"), {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.3 + i * 0.2,
        });

        // Animate h3
        gsap.to(card.querySelector("h3"), {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
            once: false,
          },
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.5 + i * 0.2,
        });
      });
    }, section3Ref);

    return () => ctx.revert();
  }, [section3Ref]);
};

export default useSection3Animation;
