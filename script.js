/* ==========================================
   EMBEDDED DASHBOARD PORTFOLIO
   Author: Sasinathan R
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       AOS INITIALIZATION
    ========================= */

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }

    /* =========================
       TYPING EFFECT
    ========================= */

    if (document.querySelector("#typing")) {

        new Typed("#typing", {
            strings: [
                "Embedded Software Engineer",
                "Firmware Developer",
                "STM32 Developer",
                "ARM Cortex-M Engineer",
                "Device Driver Developer",
                "RTOS Enthusiast"
            ],

            typeSpeed: 65,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    /* =========================
       SCROLL TO TOP BUTTON
    ========================= */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
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

    /* =========================
       SMOOTH SCROLLING
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* =========================
       NAVBAR EFFECT
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 5px 25px rgba(0,229,255,.15)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

    /* =========================
       PROTOCOL STATUS ANIMATION
    ========================= */

    const leds = document.querySelectorAll(".led");

    setInterval(() => {

        leds.forEach(led => {

            led.style.opacity =
                led.style.opacity === "0.4"
                    ? "1"
                    : "0.4";

        });

    }, 700);

    /* =========================
       SKILL BAR ANIMATION
    ========================= */

    const progressBars =
        document.querySelectorAll(".value");

    const progressObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const bar = entry.target;

                        const finalWidth =
                            bar.style.width;

                        bar.style.width = "0";

                        setTimeout(() => {

                            bar.style.transition =
                                "width 1.5s ease";

                            bar.style.width =
                                finalWidth;

                        }, 200);

                        progressObserver.unobserve(
                            bar
                        );

                    }

                });

            },

            {
                threshold: 0.3
            }

        );

    progressBars.forEach(bar => {

        progressObserver.observe(bar);

    });

    /* =========================
       CARD FADE ANIMATION
    ========================= */

    const cards = document.querySelectorAll(
        ".protocol-card, .project-card, .about-content"
    );

    const cardObserver =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },

            {
                threshold: 0.2
            }

        );

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition =
            "all .8s ease";

        cardObserver.observe(card);

    });

    /* =========================
       TERMINAL TYPEWRITER
    ========================= */

    const terminalSpans =
        document.querySelectorAll(".terminal span");

    terminalSpans.forEach(span => {

        const text = span.textContent;

        span.textContent = "";

        let i = 0;

        const typing = () => {

            if (i < text.length) {

                span.textContent += text.charAt(i);

                i++;

                setTimeout(typing, 25);

            }

        };

        const observer =
            new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        typing();

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            });

        observer.observe(span);

    });

    /* =========================
       HERO IMAGE PARALLAX
    ========================= */

    const heroImage =
        document.querySelector(".hero-image img");

    document.addEventListener("mousemove", e => {

        if (!heroImage) return;

        const x =
            (window.innerWidth / 2 - e.clientX) / 40;

        const y =
            (window.innerHeight / 2 - e.clientY) / 40;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

    /* =========================
       FOOTER YEAR
    ========================= */

    const footerText =
        document.querySelector("footer p");

    if (footerText) {

        footerText.innerHTML =
            `© ${new Date().getFullYear()} Sasinathan R | Embedded Software Engineer`;

    }

});
