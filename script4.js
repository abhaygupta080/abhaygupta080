let navbar = document.querySelector('nav');
let navbarToggle = document.querySelector('.nav-toggle');
let icon = document.querySelector('.nav-toggle i');

navbarToggle.addEventListener('click', function () {
  navbar.classList.toggle('open');

  if (navbar.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close nav when a link is clicked (mobile UX)
document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    navbar.classList.remove('open');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});