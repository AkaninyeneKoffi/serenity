// Smooth scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    document.getElementById('nav-links').classList.remove('active');
  });
});

// Hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
  e.target.reset();
});

// Newsletter form
document.getElementById("newsletter-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for subscribing! You’ll receive our latest offers soon.");
  e.target.reset();
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
faders.forEach(fader => appearOnScroll.observe(fader));

// Testimonial Carousel
let slideIndex = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlideFunc() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto-slide
let slideInterval = setInterval(nextSlide, 5000);

// Controls
nextBtn.addEventListener("click", () => { nextSlide(); resetInterval(); });
prevBtn.addEventListener("click", () => { prevSlideFunc(); resetInterval(); });

// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// Init
showSlide(slideIndex);
