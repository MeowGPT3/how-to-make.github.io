document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    // Highlight active link
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});
