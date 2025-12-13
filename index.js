 document.addEventListener('DOMContentLoaded', function() {
          const burgerMenu = document.getElementById('burgerMenu');
          const navLinks = document.getElementById('navLinks');
          const burgerIcon = burgerMenu.querySelector('i');
          
          burgerMenu.addEventListener('click', function() {
              navLinks.classList.toggle('active');
              
              if (navLinks.classList.contains('active')) {
                  burgerIcon.classList.remove('fa-bars');
                  burgerIcon.classList.add('fa-times');
              } else {
                  burgerIcon.classList.remove('fa-times');
                  burgerIcon.classList.add('fa-bars');
              }
          });
          
          const navItems = document.querySelectorAll('.nav-links a');
          navItems.forEach(item => {
              item.addEventListener('click', function() {
                  navLinks.classList.remove('active');
                  burgerIcon.classList.remove('fa-times');
                  burgerIcon.classList.add('fa-bars');
              });
          });
          
          document.addEventListener('click', function(event) {
              if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
                  navLinks.classList.remove('active');
                  burgerIcon.classList.remove('fa-times');
                  burgerIcon.classList.add('fa-bars');
              }
          });
          
          window.addEventListener('resize', function() {
              if (window.innerWidth > 768) {
                  navLinks.classList.remove('active');
                  burgerIcon.classList.remove('fa-times');
                  burgerIcon.classList.add('fa-bars');
              }
          });
          
          createParticles();
          
          const scrollIndicator = document.querySelector('.scroll-indicator');
          scrollIndicator.addEventListener('click', function() {
              window.scrollTo({
                  top: window.innerHeight - 80,
                  behavior: 'smooth'
              });
          });
      });
      
      function createParticles() {
          const particleContainer = document.getElementById('heroParticles');
          if (!particleContainer) return;
          
          const particleCount = 20;
          
          for (let i = 0; i < particleCount; i++) {
              const particle = document.createElement('div');
              particle.classList.add('particle');
              
              const size = Math.random() * 6 + 2;
              particle.style.width = `${size}px`;
              particle.style.height = `${size}px`;
              
              particle.style.left = `${Math.random() * 100}%`;
              particle.style.top = `${Math.random() * 100}%`;
              
              particle.style.animationDelay = `${Math.random() * 15}s`;
              
              particleContainer.appendChild(particle);
          }
      }
      
      window.addEventListener('scroll', function() {
          const hero = document.querySelector('.hero');
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;
          hero.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      });
