import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnarcSection4Animation = (sectionRef) => {
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        /** PART 1 - Horizontal Slider + Text Fade-In */
        const container = document.querySelector(".a-sec4-part1 .image-container");
        if (container) {
          const scrollWidth = container.scrollWidth - container.clientWidth;

          gsap.to(container, {
            x: -scrollWidth,
            ease: "none",
            scrollTrigger: {
              trigger: ".a-sec4-part1",
              start: "top top",
              end: `+=${scrollWidth}`,
              scrub: true,
              pin: true, // Pin section while scrolling horizontally
            },
          });
        }

        gsap.from(".a-sec4-part1 h1, .a-sec4-part1 h3", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".a-sec4-part1",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        /** PART 2 - Watch Faces (Diagonal Image + Text) */
        const watchFaceImages = gsap.utils.toArray(".a-sec4-part2 img");
        watchFaceImages.forEach((img, i) => {
          gsap.from(img, {
            x: i % 2 === 0 ? -80 : 80,
            y: -80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.from(".a-sec4-part2 h1, .a-sec4-part2 h3", {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".a-sec4-part2",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        /** PART 3 - Final Image + Heading */
        gsap.from(".a-sec4-part3 h1", {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".a-sec4-part3 h1",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(".a-sec4-part3 img", {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".a-sec4-part3 img",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );
};

export default useAnarcSection4Animation;
