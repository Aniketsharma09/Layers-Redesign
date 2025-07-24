import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useProductDetailsAnimation = (imageRef, detailRef, bottomHeadingRef, specRefs) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      window.scrollTo(0, 0);

      // Animate top-left image
      if (imageRef?.current) {
        gsap.fromTo(
          imageRef.current,
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
      }

      if (detailRef?.current) {
        gsap.fromTo(
          detailRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
        );
      }

    
      if (bottomHeadingRef?.current) {
        gsap.from(bottomHeadingRef.current, {
          y: -50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: bottomHeadingRef.current,
            start: 'top 90%',
            toggleActions: 'restart none restart none', // Runs every scroll
          },
        });
      }

      
      specRefs?.current?.forEach((spec) => {
        if (spec) {
          gsap.from(spec.querySelectorAll('h2, p'), {
            x: -50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
              trigger: spec,
              start: 'top 85%',
              toggleActions: 'restart none restart none',
            },
          });
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert(); // Cleanup when component unmounts
  }, [imageRef, detailRef, bottomHeadingRef, specRefs]);
};

export default useProductDetailsAnimation;
