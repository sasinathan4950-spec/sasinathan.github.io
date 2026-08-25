/*==================================================
    EMBEDDED SYSTEM PORTFOLIO
    Author : Sasinathan R
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*========================================
      AOS
    ========================================*/

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });

    }

    /*========================================
      TYPED JS
    ========================================*/

    if (document.getElementById("typing")) {

        new Typed("#typing", {

            strings: [

                "Embedded Software Engineer",

                "STM32 Firmware Developer",

                "ARM Cortex-M Programmer",

                "Embedded C Developer",

                "RTOS Enthusiast",

                "Device Driver Developer"

            ],

            typeSpeed: 60,

            backSpeed: 35,

            backDelay: 1400,

            loop: true

        });

    }

    /*========================================
      FOOTER YEAR
    ========================================*/

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /*========================================
      BACK TO TOP BUTTON
    ========================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 300) {

            topBtn.style.display = "flex";

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

    /*========================================
      ACTIVE NAVIGATION
    ========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*========================================
      SMOOTH SCROLL
    ========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*========================================
      NAVBAR SHADOW
    ========================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.style.boxShadow =
                "0 8px 25px rgba(0,229,255,.15)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

    /*========================================
      SKILL BAR ANIMATION
    ========================================*/

    const bars = document.querySelectorAll(".progress-bar");

    const skillObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const width = bar.style.width;

                bar.style.width = "0";

                setTimeout(() => {

                    bar.style.transition = "1.5s";

                    bar.style.width = width;

                }, 200);

                skillObserver.unobserve(bar);

            }

        });

    }, {

        threshold: 0.4

    });

    bars.forEach(bar => {

        skillObserver.observe(bar);

    });

    /*========================================
      HERO PARALLAX
    ========================================*/

    const heroImg = document.querySelector(".hero-image img");

    document.addEventListener("mousemove", e => {

        if (!heroImg) return;

        const x = (window.innerWidth / 2 - e.clientX) / 45;

        const y = (window.innerHeight / 2 - e.clientY) / 45;

        heroImg.style.transform =
            `translate(${x}px,${y}px)`;

    });

    /*========================================
      CARD ANIMATION
    ========================================*/

    const cards = document.querySelectorAll(

        ".project-card,.protocol-card,.certificate-card,.info-card"

    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    /*========================================
      TERMINAL TYPING
    ========================================*/

    const terminal = document.querySelector(".terminal pre");

    if (terminal) {

        const text = terminal.innerHTML;

        terminal.innerHTML = "";

        let i = 0;

        function typeTerminal() {

            if (i < text.length) {

                terminal.innerHTML += text.charAt(i);

                i++;

                setTimeout(typeTerminal, 12);

            }

        }

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    typeTerminal();

                    observer.disconnect();

                }

            });

        });

        observer.observe(terminal);

    }

    /*========================================
      MOBILE MENU
    ========================================*/

    const menuBtn = document.querySelector(".menu-btn");

    const nav = document.querySelector(".nav-links");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("show");

        });

    }

});
