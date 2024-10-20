// GSAP Animations for smooth slide-in effect
gsap.from(".hero-text h1", { duration: 1.5, x: -100, opacity: 0 });
gsap.from(".hero-text p", { duration: 1.5, x: -100, opacity: 0, delay: 0.5 });
gsap.from(".hero-image img", { duration: 2, opacity: 0, delay: 1 });

// Smooth Scroll to Chatbot Section
document.querySelector('.scroll-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#chatbot-section').scrollIntoView({ 
        behavior: 'smooth'
    });
});
