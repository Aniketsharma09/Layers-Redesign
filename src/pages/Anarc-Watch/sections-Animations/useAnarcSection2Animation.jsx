import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnarcSection2Animation = (sectionRef) => {
  useGSAP(() => {
    if (!sectionRef || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Create a timeline (paused initially)
      const tl = gsap.timeline({ paused: true });

      // LEFT SLIDER
      tl.from(".section2-left", {
        x: -150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

        // RIGHT HEADINGS
        .from(
          ".section2-right > h1, .section2-right > h2, .section2-right > h3",
          {
            y: -40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.6"
        )

        // KEY FEATURES
        .from(
          ".section2-right > h4",
          {
            x: -50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.15,
          },
          "-=0.4"
        )

        // BUY BUTTON
        .from(
          ".section2-right .buy-btn",
          {
            y: 30,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.3"
        )

        // BOTTOM LEFT CONTENT
        .from(
          ".section2-bottom .bottom-left .bottom-inner",
          {
            y: 40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.2"
        )

        // BOTTOM RIGHT IMAGE
        .from(
          ".section2-bottom > img",
          {
            x: 100,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        );

      // ScrollTrigger to replay animation on every scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 10%",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
        markers: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
};

export default useAnarcSection2Animation;
