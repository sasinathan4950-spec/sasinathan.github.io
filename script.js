/* ==========================================
   PORTFOLIO JAVASCRIPT
   Author: Sasinathan R
========================================== */

document.addEventListener("DOMContentLoaded", () => {

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
    const typingElement = document.querySelector("#typing");

    if (typingElement) {
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
    }

    // =========================
    // Scroll To Top Button
    // =========================
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                topBtn.style.display = "flex";
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
    }

    // =========================
    // Active Navigation
    // =========================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (
                window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    });

    // =========================
    // Smooth Scrolling
    // =========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    // =========================
    // Navbar Scroll Effect
    // =========================
    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }

    // =========================
    // Project Cards Animation
    // =========================
    const cards = document.querySelectorAll(".project-card");

    if (cards.length > 0) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.2
            }
        );

        cards.forEach(card => {

            card.style.opacity = "0";
            card.style.transform = "translateY(40px)";
            card.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            observer.observe(card);

        });

    }

    // =========================
    // Dynamic Footer Year
    // =========================
    const footerText = document.querySelector("footer p");

    if (footerText) {

        footerText.innerHTML =
            `© ${new Date().getFullYear()} Sasinathan R | Embedded Software Engineer`;

    }

    // =========================
    // Page Loaded Effect
    // =========================
    window.addEventListener("load", () => {

        document.body.classList.add("loaded");

    });

});
