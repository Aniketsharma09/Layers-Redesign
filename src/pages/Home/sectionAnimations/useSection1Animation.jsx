import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useSection1Animation = () => {
  const { contextSafe } = useGSAP();

  const animateText = contextSafe(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(".firstPart", {
      opacity: 0,
      y: 50,
      duration: 0.2,
      stagger: 0.05,
      ease: "power3.out",
    });

    // Animate second part in reverse order
    tl.from(
      ".secondPart",
      {
        opacity: 0,
        y: 50,
        duration: 0.2,
        stagger: -0.05,
        ease: "power3.out",
      },
      "<" // start at same time
    );

    // Subheading animation
    tl.from(
      ".subChar",
      {
        opacity: 0,
        y: 30,
        duration: 0.1,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.2"
    );
  });

  useGSAP(() => animateText(), []);
};

export default useSection1Animation;
