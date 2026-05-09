const navbar = document.querySelector("nav");
const navbarToggle = document.querySelector(".nav-toggle");
const icon = document.querySelector(".nav-toggle i");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Auto close mobile menu
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");

    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});