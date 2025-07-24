import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useProductsAnimation = (titleRef, cardsRef, dependencies = []) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      window.scrollTo(0, 0);

      if (titleRef?.current) {
        gsap.from(titleRef.current, {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'restart none restart none', 
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert(); 
  }, dependencies);
};

export default useProductsAnimation;
