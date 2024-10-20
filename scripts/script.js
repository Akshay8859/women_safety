// JavaScript to trigger animations when scrolling
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.animated');

    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('fade-in');
        }
    });
});

// Smooth scroll functionality for the "Read More" button
document.getElementById('scrollBtn').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent the default jump behavior

    // Get the features section
    const targetSection = document.querySelector('#features');

    // Smoothly scroll to the features section
    targetSection.scrollIntoView({
        behavior: 'smooth'  // Smooth scrolling effect
    });
});
