// Custom Cursor Glow Effect
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Smoothly follow the cursor
    cursorGlow.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 3000, fill: "forwards" });
});

// Initial load animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.navbar').classList.add('fade-in');
        document.querySelector('.hero-content').classList.add('fade-in-delay-1');
        
        const visual = document.querySelector('.hero-visual');
        if (visual) visual.classList.add('fade-in-delay-2');
    }, 100);
});

// Scroll Reveal Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Function to trigger observer on new elements
function observeElements() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
}

// Ensure observers are bound after load
document.addEventListener('DOMContentLoaded', observeElements);
