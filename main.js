function showSection(sectionId) {
  
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  // Update navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    }
  });

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Handle navigation clicks
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      showSection(sectionId);
    });
  });

  // Gallery image click effect
  const galleryImages = document.querySelectorAll(".gallery-image");
  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      this.style.transform = "scale(1.1) rotate(5deg)";
      setTimeout(() => {
        this.style.transform = "scale(1) rotate(0deg)";
      }, 300);
    });
  });
});

// Smooth animations on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(139, 69, 19, 0.98)";
  } else {
    navbar.style.background = "rgba(139, 69, 19, 0.95)";
  }
});
