document.addEventListener("DOMContentLoaded", function() {
    const hamburgerCheckbox = document.querySelector(".hamburger input");
    const navLinks = document.querySelector(".nav-links");
  
    hamburgerCheckbox.addEventListener("change", function() {
      if (this.checked) {
        navLinks.style.display = "block";
        document.body.style.overflow = "hidden";
        navLinks.classList.add("show");
      } else {
        navLinks.style.display = "none";
        document.body.style.overflow = "auto";
        navLinks.classList.remove("show");
      }
    });
});