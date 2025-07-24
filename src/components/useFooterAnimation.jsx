import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useFooterAnimation = (footerRef) => {
  const location = useLocation();

  useGSAP(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",         // good balance for both desktop & mobile
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".footer-top-left .top-left-top img", {
        opacity: 0,
        y: -40,
        duration: 0.4,
      })
        .from(
          ".footer-top-left .top-left-bottom h5",
          {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.3,
          },
          "-=0.2"
        )
        .from(
          ".footer-top-right h3",
          {
            opacity: 0,
            y: -30,
            duration: 0.3,
          },
          "-=0.1"
        )
        .from(".footer-top-right h2", {
          opacity: 0,
          y: -20,
          duration: 0.3,
        })
        .from(".footer-top-right .inputDiv", {
          opacity: 0,
          y: -20,
          duration: 0.3,
        })
        .from(
          ".footer-bottom .left p",
          {
            opacity: 0,
            y: -15,
            stagger: 0.1,
            duration: 0.3,
          },
          "-=0.2"
        )
        .from(".footer-bottom .right p", {
          opacity: 0,
          y: -10,
          duration: 0.3,
        });
    }, footerRef);

    ScrollTrigger.refresh(); // critical for responsive support

    return () => ctx.revert(); // cleanup
  }, { dependencies: [location.pathname] });

  // Fallback refresh in case routing breaks scroll trigger
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  }, [location.pathname]);
};

export default useFooterAnimation;
