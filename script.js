const professions = ["Developer", "Tester","Analyst"];
let currentProfession = 0;
let charIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 50;
const pauseBetween = 2000;

function typeText() {
    const text = professions[currentProfession];
    const typingElement = document.getElementById('typing-text');
    
    if(charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, pauseBetween);
    }
}

function eraseText() {
    const typingElement = document.getElementById('typing-text');
    
    if(charIndex > 0) {
        typingElement.textContent = typingElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        currentProfession = (currentProfession + 1) % professions.length;
        setTimeout(typeText, typingSpeed);
    }
}
   
// Initialize
window.addEventListener('load', () => {
    typeText();
    document.getElementById('typing-text').style.animation = 
        "blink 0.75s step-end infinite";
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-item, .cert-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

    document.querySelectorAll('.skill-item, .cert-card, .project-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});