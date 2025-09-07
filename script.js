
// Change navbar style on scroll
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if(window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Responsive mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", function(){
  navLinks.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.classList.add('active');
  });
  link.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });
  // Optional: close menu on mobile after click
  link.addEventListener('click', function() {
    navLinks.classList.remove('active');
  });
});
