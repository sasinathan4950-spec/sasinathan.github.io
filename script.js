/* ==========================================
   PORTFOLIO JAVASCRIPT
   Author: Sasinathan Rangasamy
==========================================*/

// =========================
// AOS Initialization
// =========================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// =========================
// Typing Animation
// =========================

new Typed("#typing", {
    strings: [
        "Embedded Software Engineer",
        "Firmware Developer",
        "Embedded C Programmer",
        "ARM Cortex-M Enthusiast",
        "Microcontroller Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// =========================
// Scroll To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Fade-in Project Cards
// =========================

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .8s ease";

    observer.observe(card);

});

// =========================
// Hero Button Hover Effect
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// Footer Year
// =========================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Sasinathan Rangasamy | Embedded Software Engineer`;

}
