document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const steps = document.querySelectorAll(".step");

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - 50; // Ensures animation triggers when near view
    }

    // Fade-in effect on page load
    function fadeInOnLoad() {
        fadeInElements.forEach(el => el.classList.add("show"));
    }

    // Function to reveal steps on scroll
    function revealOnScroll() {
        steps.forEach(step => {
            if (isInViewport(step)) {
                step.classList.add("show");
            }
        });
    }

    // Trigger animations on load and scroll
    fadeInOnLoad();
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once to check already visible elements
});
