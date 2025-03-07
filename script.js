document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const steps = document.querySelectorAll(".step");

    // Fade-in effect on load
    setTimeout(() => {
        fadeInElements.forEach(el => el.classList.add("show"));
    }, 300);

    // Scroll animation effect
    function revealOnScroll() {
        steps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (stepTop < windowHeight - 50) {
                step.classList.add("show");
            }
        });
    }

    // Trigger scroll event
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});
