document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const steps = document.querySelectorAll(".step");
    const navLinks = document.querySelectorAll("nav a");

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - 50;
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

    // Smooth scroll behavior for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute("href").substring(1); // Get step ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // Trigger animations on load and scroll
    fadeInOnLoad();
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once to check already visible elements
});
