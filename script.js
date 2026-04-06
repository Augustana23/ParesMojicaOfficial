function toggleMenu() {
    const nav = document.getElementById("nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* Scroll Fade Animation */
const faders = document.querySelectorAll(".menu-card, section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

faders.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});