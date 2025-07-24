import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSection4Animation = (section4Ref) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      /** First Part Animation */
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section4-first-part",
          start: "top 75%",
          end: "bottom 20%", // Ensures the animation is active for longer
          toggleActions: "play none none reverse", // Replay on scroll up
        },
      })
        .from(".section4-first-part h1", {
          opacity: 0,
          y: -50,
          duration: 0.5,
        })
        .from(
          ".section4-first-part h3",
          {
            opacity: 0,
            y: -30,
            duration: 0.4,
          },
          "-=0.3"
        )
        .from(
          ".react-player",
          {
            opacity: 0,
            y: 50,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );

      /** Second Part Animation */
      gsap.timeline({
        scrollTrigger: {
          trigger: ".section4-second-part",
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
        .from(".section4-second-part h1", {
          opacity: 0,
          y: -50,
          duration: 0.5,
        })
        .from(
          ".section4-second-part h3",
          {
            opacity: 0,
            y: -30,
            duration: 0.4,
          },
          "-=0.3"
        )
        .from(
          ".input-section",
          {
            opacity: 0,
            x: -50,
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out",
          },
          ""
        )
        .from(
          ".bottom-part .ele",
          {
            opacity: 0,
            x: -50,
            duration: 0.4,
            stagger: 0.2,
          },
          ""
        );
    }, section4Ref);

    return () => ctx.revert();
  }, [section4Ref]);
};

export default useSection4Animation;
