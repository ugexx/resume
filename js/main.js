/* main.js — Colton Fouch Resume
   Handles: theme toggle, mobile nav, scroll animations, active nav links
*/

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
     Theme toggle — dark / light with localStorage persistence
  -------------------------------------------------------------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('cf-theme', theme);
  }

  // On load, respect saved preference then system preference
  const savedTheme = localStorage.getItem('cf-theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* -------------------------------------------------------------------------
     Mobile navigation — hamburger toggle
  -------------------------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  function closeMenu() {
    if (!hamburger || !navLinks) return;
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.classList.add('active');
        navLinks.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }

  /* -------------------------------------------------------------------------
     Navbar scroll shadow
  -------------------------------------------------------------------------- */
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* -------------------------------------------------------------------------
     Active nav link tracking via IntersectionObserver
  -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  if (sections.length && navItems.length) {
    const activeSectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach(function (item) {
            const href = item.getAttribute('href');
            item.classList.toggle('active', href === '#' + id);
          });
        }
      });
    }, {
      threshold: 0.35,
      rootMargin: '-64px 0px 0px 0px'
    });

    sections.forEach(function (section) {
      activeSectionObserver.observe(section);
    });
  }

  /* -------------------------------------------------------------------------
     Scroll-triggered fade-up animations via IntersectionObserver
  -------------------------------------------------------------------------- */
  const fadeEls = document.querySelectorAll('.fade-up');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback: show all immediately if IntersectionObserver not supported
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* -------------------------------------------------------------------------
     Stagger child cards inside project & skill grids
  -------------------------------------------------------------------------- */
  const gridContainers = document.querySelectorAll('.projects-grid, .skills-grid, .certs-grid');

  gridContainers.forEach(function (grid) {
    const cards = grid.querySelectorAll('.project-card, .skill-category, .cert-card');
    cards.forEach(function (card, i) {
      card.style.transitionDelay = (i * 80) + 'ms';
      card.classList.add('fade-up');
    });
  });

  // Re-observe newly added fade-up elements
  if ('IntersectionObserver' in window) {
    const allFade = document.querySelectorAll('.fade-up:not(.visible)');
    const staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          staggerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    allFade.forEach(function (el) {
      staggerObserver.observe(el);
    });
  }

})();
