import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnarcSection3Animation = (sectionRef) => {
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // PART 1
        gsap.from(".a-sec-part1 img:first-child", {
          x: -100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".a-sec-part1",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(".a-sec-part1 .sec-top-right", {
          x: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".a-sec-part1",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // PART 2
        gsap.from(".a-sec-part2 h1, .a-sec-part2 h2", {
          y: -50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".a-sec-part2",
            start: "top 90%",
          },
        });

        gsap.from(".a-sec-part2 video", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".a-sec-part2",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // PART 3
        gsap.from(
          ".a-sec-part3 .part3-left h1, .a-sec-part3 .part3-left h2, .a-sec-part3 .part3-left h3, .a-sec-part3 .part3-left p",
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".a-sec-part3",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Right Video in Part 3
        gsap.from(".a-sec-part3 video", {
          x: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".a-sec-part3",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );
};

export default useAnarcSection3Animation;
