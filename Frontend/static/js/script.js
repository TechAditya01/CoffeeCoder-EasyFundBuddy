// // Wait for DOM to be loaded
// document.addEventListener('DOMContentLoaded', () => {
//   // Register ScrollTrigger plugin
//   gsap.registerPlugin(ScrollTrigger);

//   // Navbar Animation
//   const navAnimation = gsap.from('#navbar', {
//       y: -100,
//       opacity: 0,
//       duration: 1,
//       ease: 'power3.out'
//   });

//   // Hero Section Animations
//   const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
//   heroTimeline
//       .from('.hero-title', {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           delay: 0.5
//       })
//       .from('.hero-text', {
//           y: 30,
//           opacity: 0,
//           duration: 1
//       }, '-=0.7')
//       .from('.hero-btn', {
//           y: 30,
//           opacity: 0,
//           duration: 1
//       }, '-=0.7')
//       .from('.hero-image', {
//           x: 50,
//           opacity: 0,
//           duration: 1
//       }, '-=0.7');

//   // Parallax Effect for Hero Image
//   gsap.to('.hero-image', {
//       scrollTrigger: {
//           trigger: '.hero-section',
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1
//       },
//       y: 100,
//       ease: 'none'
//   });

//   // Features Section Animation
//   const featureCards = document.querySelectorAll('.feature-card');
//   featureCards.forEach((card, index) => {
//       gsap.from(card, {
//           scrollTrigger: {
//               trigger: card,
//               start: 'top bottom-=100',
//               toggleActions: 'play none none reverse'
//           },
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           delay: index * 0.1
//       });
//   });

//   // About Section Animation
//   gsap.from('.about-section', {
//       scrollTrigger: {
//           trigger: '.about-section',
//           start: 'top bottom-=100',
//           toggleActions: 'play none none reverse'
//       },
//       y: 50,
//       opacity: 0,
//       duration: 1
//   });

//   // Mission & Vision Cards Animation
//   gsap.from('.mission-card', {
//       scrollTrigger: {
//           trigger: '.mission-card',
//           start: 'top bottom-=100',
//           toggleActions: 'play none none reverse'
//       },
//       x: -50,
//       opacity: 0,
//       duration: 1
//   });

//   gsap.from('.vision-card', {
//       scrollTrigger: {
//           trigger: '.vision-card',
//           start: 'top bottom-=100',
//           toggleActions: 'play none none reverse'
//       },
//       x: 50,
//       opacity: 0,
//       duration: 1
//   });

//   // Team Section Animation
//   gsap.from('.team-section h2', {
//       scrollTrigger: {
//           trigger: '.team-section',
//           start: 'top bottom-=100',
//           toggleActions: 'play none none reverse'
//       },
//       y: 30,
//       opacity: 0,
//       duration: 1
//   });

//   const teamCards = document.querySelectorAll('.team-card');
//   teamCards.forEach((card, index) => {
//       gsap.from(card, {
//           scrollTrigger: {
//               trigger: card,
//               start: 'top bottom-=100',
//               toggleActions: 'play none none reverse'
//           },
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           delay: index * 0.2
//       });
//   });

//   // Footer Animation
//   const footerBoxes = document.querySelectorAll('.footer-box');
//   footerBoxes.forEach((box, index) => {
//       gsap.from(box, {
//           scrollTrigger: {
//               trigger: '.footer-section',
//               start: 'top bottom-=100',
//               toggleActions: 'play none none reverse'
//           },
//           y: 50,
//           opacity: 0,
//           duration: 0.8,
//           delay: index * 0.2
//       });
//   });

//   // Navbar Hover Effects
//   const navLinks = document.querySelectorAll('.nav-link');
//   navLinks.forEach(link => {
//       link.addEventListener('mouseenter', () => {
//           gsap.to(link, {
//               scale: 1.05,
//               duration: 0.3,
//               ease: 'power2.out'
//           });
//       });
      
//       link.addEventListener('mouseleave', () => {
//           gsap.to(link, {
//               scale: 1,
//               duration: 0.3,
//               ease: 'power2.out'
//           });
//       });
//   });

//   // Smooth Scroll Animation
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function(e) {
//           e.preventDefault();
//           const target = document.querySelector(this.getAttribute('href'));
//           if (target) {
//               gsap.to(window, {
//                   duration: 1,
//                   scrollTo: {
//                       y: target,
//                       offsetY: 70
//                   },
//                   ease: 'power3.inOut'
//               });
//           }
//       });
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   // Animate the login container
//   gsap.to('.login-container', {
//       duration: 1,
//       opacity: 1,
//       y: 0,
//       ease: 'power2.out'
//   });

//   // Add hover animation to buttons
//   const buttons = document.querySelectorAll('button');
//   buttons.forEach(button => {
//       button.addEventListener('mouseenter', () => {
//           gsap.to(button, {
//               duration: 0.3,
//               scale: 1.02,
//               ease: 'power1.out'
//           });
//       });

//       button.addEventListener('mouseleave', () => {
//           gsap.to(button, {
//               duration: 0.3,
//               scale: 1,
//               ease: 'power1.out'
//           });
//       });
//   });
// });


// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Initialize GSAP
//   gsap.from('.signup-container', {
//       duration: 1,
//       y: 30,
//       opacity: 0,
//       ease: 'power3.out'
//   });

//   // Form validation and submission
//   const signupForm = document.getElementById('signup-form');
//   const fullNameInput = document.getElementById('full-name');
//   const emailInput = document.getElementById('email');
//   const passwordInput = document.getElementById('password');

//   // Input validation functions
//   const validateFullName = (name) => {
//       return name.length >= 2 && /^[a-zA-Z\s]*$/.test(name);
//   };

//   const validateEmail = (email) => {
//       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePassword = (password) => {
//       return password.length >= 8 && 
//              /[A-Z]/.test(password) && 
//              /[a-z]/.test(password) && 
//              /[0-9]/.test(password);
//   };

//   // Real-time validation feedback
//   const addValidationFeedback = (input, isValid, message) => {
//       const feedbackDiv = input.parentElement.querySelector('.validation-feedback');
      
//       if (!feedbackDiv) {
//           const div = document.createElement('div');
//           div.className = 'validation-feedback';
//           input.parentElement.appendChild(div);
//       }
      
//       const feedback = feedbackDiv || input.parentElement.querySelector('.validation-feedback');
//       feedback.textContent = message;
//       feedback.style.color = isValid ? '#28a745' : '#dc3545';
//       input.style.borderColor = isValid ? '#28a745' : '#dc3545';
//   };

//   // Input event listeners for real-time validation
//   fullNameInput.addEventListener('input', (e) => {
//       const isValid = validateFullName(e.target.value);
//       addValidationFeedback(
//           fullNameInput,
//           isValid,
//           isValid ? '✓ Valid name' : 'Name should contain only letters and spaces'
//       );
//   });

//   emailInput.addEventListener('input', (e) => {
//       const isValid = validateEmail(e.target.value);
//       addValidationFeedback(
//           emailInput,
//           isValid,
//           isValid ? '✓ Valid email' : 'Please enter a valid email address'
//       );
//   });

//   passwordInput.addEventListener('input', (e) => {
//       const isValid = validatePassword(e.target.value);
//       addValidationFeedback(
//           passwordInput,
//           isValid,
//           isValid ? '✓ Strong password' : 'Password must be at least 8 characters with uppercase, lowercase, and numbers'
//       );
//   });

//   // Form submission handler
//   signupForm.addEventListener('submit', async (e) => {
//       e.preventDefault();

//       // Validate all fields
//       const isNameValid = validateFullName(fullNameInput.value);
//       const isEmailValid = validateEmail(emailInput.value);
//       const isPasswordValid = validatePassword(passwordInput.value);

//       if (!isNameValid || !isEmailValid || !isPasswordValid) {
//           // Show error message
//           const errorMessage = document.createElement('div');
//           errorMessage.className = 'alert alert-danger mt-3';
//           errorMessage.textContent = 'Please fix the validation errors before submitting.';
//           signupForm.appendChild(errorMessage);
          
//           // Remove error message after 3 seconds
//           setTimeout(() => {
//               errorMessage.remove();
//           }, 3000);
          
//           return;
//       }

//       // Show loading state
//       const submitButton = signupForm.querySelector('button[type="submit"]');
//       const originalButtonText = submitButton.textContent;
//       submitButton.disabled = true;
//       submitButton.textContent = 'Signing up...';

//       try {
//           // Simulate API call (replace with actual API endpoint)
//           await new Promise(resolve => setTimeout(resolve, 1500));

//           // Show success message and redirect
//           const successMessage = document.createElement('div');
//           successMessage.className = 'alert alert-success mt-3';
//           successMessage.textContent = 'Account created successfully! Redirecting...';
//           signupForm.appendChild(successMessage);

//           // Redirect to login page after 2 seconds
//           setTimeout(() => {
//               window.location.href = 'login.html';
//           }, 2000);

//       } catch (error) {
//           // Handle error
//           const errorMessage = document.createElement('div');
//           errorMessage.className = 'alert alert-danger mt-3';
//           errorMessage.textContent = 'An error occurred. Please try again.';
//           signupForm.appendChild(errorMessage);

//           // Remove error message after 3 seconds
//           setTimeout(() => {
//               errorMessage.remove();
//           }, 3000);

//       } finally {
//           // Reset button state
//           submitButton.disabled = false;
//           submitButton.textContent = originalButtonText;
//       }
//   });

//   // Navbar scroll effect
//   let lastScroll = 0;
//   const navbar = document.getElementById('navbar');

//   window.addEventListener('scroll', () => {
//       const currentScroll = window.pageYOffset;

//       if (currentScroll <= 0) {
//           navbar.classList.remove('scroll-up');
//           return;
//       }

//       if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
//           // Scroll down
//           navbar.classList.remove('scroll-up');
//           navbar.classList.add('scroll-down');
//       } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
//           // Scroll up
//           navbar.classList.remove('scroll-down');
//           navbar.classList.add('scroll-up');
//       }

//       lastScroll = currentScroll;
//   });
// });

// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Initialize GSAP
//   gsap.registerPlugin(ScrollTrigger);

//   // Navbar scroll animation
//   const navbar = document.getElementById('navbar');
//   let lastScroll = 0;

//   window.addEventListener('scroll', () => {
//       const currentScroll = window.pageYOffset;
      
//       if (currentScroll <= 0) {
//           navbar.classList.remove('scroll-up');
//           return;
//       }
      
//       if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
//           navbar.classList.remove('scroll-up');
//           navbar.classList.add('scroll-down');
//       } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
//           navbar.classList.remove('scroll-down');
//           navbar.classList.add('scroll-up');
//       }
//       lastScroll = currentScroll;
//   });

//   // Form validation
//   const emailInput = document.getElementById('email');
//   const continueBtn = document.querySelector('.continue-btn');
  
//   function validateEmail(email) {
//       const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//       return re.test(String(email).toLowerCase());
//   }

//   emailInput.addEventListener('input', function() {
//       if (validateEmail(this.value)) {
//           this.style.borderColor = '#28a745';
//           continueBtn.removeAttribute('disabled');
//       } else {
//           this.style.borderColor = this.value ? '#dc3545' : '#dee2e6';
//           continueBtn.setAttribute('disabled', 'true');
//       }
//   });

//   // Login form submission
//   const loginForm = document.querySelector('.login-container');
  
//   loginForm.addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       if (validateEmail(emailInput.value)) {
//           // Animate button to show loading state
//           continueBtn.innerHTML = '<span class="spinner"></span> Processing...';
//           continueBtn.disabled = true;

//           // Simulate API call
//           setTimeout(() => {
//               // Reset button state
//               continueBtn.innerHTML = 'Continue →';
//               continueBtn.disabled = false;

//               // Show success message
//               gsap.to('.login-container', {
//                   y: -10,
//                   opacity: 0,
//                   duration: 0.5,
//                   onComplete: () => {
//                       loginForm.innerHTML = `
//                           <div class="success-message">
//                               <h2>Check your email</h2>
//                               <p>We've sent a login link to ${emailInput.value}</p>
//                           </div>
//                       `;
//                       gsap.from('.success-message', {
//                           y: 10,
//                           opacity: 0,
//                           duration: 0.5
//                       });
//                   }
//               });
//           }, 2000);
//       }
//   });

//   // Google Sign In Button Animation
//   const googleBtn = document.querySelector('.google-btn');
  
//   googleBtn.addEventListener('mouseenter', () => {
//       gsap.to(googleBtn, {
//           scale: 1.02,
//           duration: 0.3,
//           ease: "power2.out"
//       });
//   });

//   googleBtn.addEventListener('mouseleave', () => {
//       gsap.to(googleBtn, {
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out"
//       });
//   });

//   // Animate elements on page load
//   gsap.from('.login-container', {
//       y: 20,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out"
//   });

//   // Initialize Bootstrap tooltips
//   const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//   tooltipTriggerList.map(function (tooltipTriggerEl) {
//       return new bootstrap.Tooltip(tooltipTriggerEl);
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   // GSAP Animation for Loan Cards
//   gsap.from(".loan-card", {
//       opacity: 0,
//       y: 50,
//       duration: 0.8,
//       stagger: 0.3
//   });

//   // GSAP Animation for Transactions
//   gsap.from(".transaction-list li", {
//       opacity: 0,
//       x: -50,
//       duration: 0.6,
//       stagger: 0.2
//   });

//   // GSAP Animation for Live Tracking Progress Bar
//   gsap.to("#progress-bar", {
//       width: "50%",
//       duration: 2,
//       ease: "power2.inOut"
//   });

//   // Logout Function
//   document.getElementById('logout-btn').addEventListener('click', () => {
//       gsap.to("body", { opacity: 0, duration: 1, onComplete: () => {
//           window.location.href = "index.html"; 
//       }});
//   });
// });


// function redirectToApplyHome() {
//   window.location.href = "applyhome.html";
// }

// // 
