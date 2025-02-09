document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initial Loading Animation
  const pageLoadTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  pageLoadTimeline
      .from('#navbar', {
          y: -100,
          opacity: 0,
          duration: 1
      })
      .from('.hero-title', {
          y: 50,
          opacity: 0,
          duration: 1
      })
      .from('.hero-text', {
          y: 30,
          opacity: 0,
          duration: 1
      }, '-=0.7')
      .from('.hero-btn', {
          y: 30,
          opacity: 0,
          duration: 1
      }, '-=0.7')
      .from('.hero-image', {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out'
      }, '-=0.7');

  // Hero Section Parallax
  gsap.to('.hero-image', {
      scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
      },
      y: 100,
      ease: 'none'
  });

  // Features Section Animations
  const featureCards = document.querySelectorAll('.feature-card');
  
  // Feature Cards Hover Animations
  featureCards.forEach((card, index) => {
      // Create hover effect timeline
      const hoverTimeline = gsap.timeline({ paused: true });
      
      hoverTimeline
          .to(card, {
              y: -10,
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
              duration: 0.3
          })
          .to(card.querySelector('.icon'), {
              scale: 1.2,
              rotate: '+=5',
              duration: 0.4,
              ease: 'back.out(1.7)'
          }, 0)
          .to(card.querySelector('h4'), {
              color: '#4f46e5',
              duration: 0.3
          }, 0)
          .to(card, {
              backgroundColor: 'rgba(99, 102, 241, 0.03)',
              duration: 0.3
          }, 0);

      // Add hover event listeners
      card.addEventListener('mouseenter', () => hoverTimeline.play());
      card.addEventListener('mouseleave', () => hoverTimeline.reverse());

      // Scroll Trigger Animation
      gsap.from(card, {
          scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse'
          },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: index * 0.2
      });

      // Floating Animation for Icons
      gsap.to(card.querySelector('.icon'), {
          y: -8,
          duration: 2,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
      });
  });

  // About Section Animation
  gsap.from('.about-section', {
      scrollTrigger: {
          trigger: '.about-section',
          start: 'top bottom-=100'
      },
      y: 50,
      opacity: 0,
      duration: 1
  });

  // Mission & Vision Cards Animation
  const missionVisionTimeline = gsap.timeline({
      scrollTrigger: {
          trigger: '.mission-vision',
          start: 'top bottom-=100'
      }
  });

  missionVisionTimeline
      .from('.mission-card', {
          x: -50,
          opacity: 0,
          duration: 1
      })
      .from('.vision-card', {
          x: 50,
          opacity: 0,
          duration: 1
      }, '-=0.7');

  // Team Section Animation
  gsap.from('.team-section h2', {
      scrollTrigger: {
          trigger: '.team-section',
          start: 'top bottom-=100'
      },
      y: 30,
      opacity: 0,
      duration: 1
  });

  // Team Cards Stagger Animation
  gsap.from('.team-card', {
      scrollTrigger: {
          trigger: '.team-card',
          start: 'top bottom-=100'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
  });

  // Footer Animation
  const footerTimeline = gsap.timeline({
      scrollTrigger: {
          trigger: '.footer-section',
          start: 'top bottom-=100'
      }
  });

  footerTimeline
      .from('.footer-box', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2
      })
      .from('.footer-bottom', {
          opacity: 0,
          duration: 0.5
      }, '-=0.3');

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              gsap.to(window, {
                  duration: 1,
                  scrollTo: {
                      y: target,
                      offsetY: 70
                  },
                  ease: 'power3.inOut'
              });
          }
      });
  });

  // Batch Animation for Features Section
  ScrollTrigger.batch('.feature-card', {
      start: 'top bottom-=100',
      onEnter: batch => {
          gsap.from(batch, {
              opacity: 0,
              y: 50,
              stagger: 0.15,
              duration: 0.8,
              ease: 'power3.out'
          });
      },
      onLeave: batch => {
          gsap.to(batch, {
              opacity: 0,
              y: -50,
              stagger: 0.1,
              duration: 0.5
          });
      },
      onEnterBack: batch => {
          gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.5
          });
      }
  });
});