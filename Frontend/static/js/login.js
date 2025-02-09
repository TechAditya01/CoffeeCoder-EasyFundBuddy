// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Immediately animate in the login container
  const loginContainer = document.querySelector('.login-container');
  if (loginContainer) {
      // Reset initial styles to ensure visibility
      gsap.set(loginContainer, {
          opacity: 0,
          y: 20
      });
      
      // Animate in
      gsap.to(loginContainer, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3
      });

      // Animate children elements
      const loginElements = loginContainer.children;
      gsap.from(loginElements, {
          opacity: 0,
          y: 15,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.5
      });
  }

  // Navbar animation
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScroll && currentScroll > 100) {
          // Scrolling down
          gsap.to(navbar, {
              y: '-100%',
              duration: 0.3,
              ease: 'power2.inOut'
          });
      } else {
          // Scrolling up
          gsap.to(navbar, {
              y: '0%',
              duration: 0.3,
              ease: 'power2.inOut'
          });
      }
      
      lastScroll = currentScroll;
  });

  // Footer animations
  gsap.from('.footer-box', {
      scrollTrigger: {
          trigger: '.footer-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
  });

  // Social icons animation
  gsap.from('.social-icons a', {
      scrollTrigger: {
          trigger: '.social-icons',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
      },
      scale: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.7)'
  });

  // Form validation and interaction
  const emailInput = document.getElementById('email');
  const continueBtn = document.querySelector('.continue-btn');
  
  if (emailInput && continueBtn) {
      emailInput.addEventListener('input', (e) => {
          const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
          
          if (isValid) {
              gsap.to(continueBtn, {
                  backgroundColor: '#2563eb',
                  scale: 1.02,
                  duration: 0.3
              });
          } else {
              gsap.to(continueBtn, {
                  backgroundColor: '#94a3b8',
                  scale: 1,
                  duration: 0.3
              });
          }
      });
  }

  // Google button hover animation
  const googleBtn = document.querySelector('.google-btn');
  if (googleBtn) {
      googleBtn.addEventListener('mouseenter', () => {
          gsap.to(googleBtn, {
              scale: 1.02,
              backgroundColor: '#f1f5f9',
              duration: 0.3
          });
      });

      googleBtn.addEventListener('mouseleave', () => {
          gsap.to(googleBtn, {
              scale: 1,
              backgroundColor: 'white',
              duration: 0.3
          });
      });
  }
});