// Typing effect for profession titles
const typingText = document.getElementById('typing-text');
const professions = [
    "Software Developer",
    "Programmer",
    "Automation Tester",
    "Python Developer",
    "Java Developer",
];
let professionIndex = 0;
let charIndex = 0;
let typingSpeed = 120;
let erasingSpeed = 80;
let delayBetween = 1800;

function typeProfession() {
    if (charIndex < professions[professionIndex].length) {
        typingText.textContent += professions[professionIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeProfession, typingSpeed);
    } else {
        setTimeout(eraseProfession, delayBetween);
    }
}

function eraseProfession() {
    if (charIndex > 0) {
        typingText.textContent = professions[professionIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseProfession, erasingSpeed);
    } else {
        professionIndex = (professionIndex + 1) % professions.length;
        setTimeout(typeProfession, typingSpeed + 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(professions.length) setTimeout(typeProfession, 500);
});

// Navbar burger toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(22, 27, 34, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#161b22';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add typing cursor effect
const style = document.createElement('style');
style.textContent = `
    .typing-text::after {
        content: '|';
        animation: blink 1s infinite;
        color: #58a6ff;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);