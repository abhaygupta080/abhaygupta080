const navbar = document.querySelector('nav');
const navbarToggle = document.querySelector('.nav-toggle');
const icon = document.querySelector('.nav-toggle i');
const navLinks = document.querySelectorAll('.nav-links a, .nav-btn a');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    // Toggle icon between bars and times
    if (navbar.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Close menu when a link is clicked (crucial for mobile UX)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});