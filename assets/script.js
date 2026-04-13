document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Sticky Navbar Blur Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-question');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const activeItem = document.querySelector('.faq-item.active');
      const parent = item.parentElement;
      
      // Close currently active if it's not the clicked one
      if (activeItem && activeItem !== parent) {
        activeItem.classList.remove('active');
      }
      
      // Toggle clicked item
      parent.classList.toggle('active');
    });
  });

  // Form Submit Fake Handler
  const form = document.querySelector('.cta-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const originalText = btn.textContent;
      
      btn.style.background = 'var(--color-success)';
      btn.textContent = 'Solicitação Enviada! ✓';
      btn.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.4)';
      
      setTimeout(() => {
        btn.style.background = '';
        btn.textContent = originalText;
        btn.style.boxShadow = '';
        form.reset();
      }, 3000);
    });
  }

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Handle timeline active states specifically
        if (entry.target.classList.contains('timeline-step')) {
          entry.target.classList.add('active');
        }

        // Optional: stop observing once animated
        // observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const animatedElements = document.querySelectorAll('.reveal-on-scroll, .timeline-progress-anim, .timeline-step');
  animatedElements.forEach(el => observer.observe(el));
});
