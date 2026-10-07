// ======================
// YZVKZV Portfolio Script
// ======================

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    });
  }

  // Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Reveal Animation on Scroll
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });
});
