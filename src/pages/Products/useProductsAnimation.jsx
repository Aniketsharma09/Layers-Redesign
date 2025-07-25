import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useProductsAnimation = (titleRef, cardsRef, dependencies = []) => {
  useLayoutEffect(() => {
    if (!titleRef?.current || !cardsRef?.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { y: -50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Animate each card on scroll
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, { autoAlpha: 0, y: 50 });

        gsap.to(card, {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            id: `product-card-${index}`,
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
            invalidateOnRefresh: true,
            markers: false,
          },
        });
      });
    }, [titleRef, cardsRef]);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, dependencies);
};

export default useProductsAnimation;
