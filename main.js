// JavaScript to handle the mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    mobileMenuToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("active");
    });
});
const typedText = document.querySelector('.typed-text');
  typedText.classList.remove('d-none'); // Remove 'd-none' class to make it visible

  // The text will be typed when the page loads
  setTimeout(function() {
    typedText.style.animation = 'none'; // Pause the animation
  }, 8000); // 8 seconds (8000 milliseconds) for the animation to complete
  