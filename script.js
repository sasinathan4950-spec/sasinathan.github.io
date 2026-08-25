/*=========================================================
    Portfolio Script
    Author : Sasinathan Rangasamy
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /*=====================================================
        LOADER
    =====================================================*/

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (!loader) return;

        setTimeout(() => {

            loader.classList.add("hide");

            setTimeout(() => {

                loader.remove();

            }, 500);

        }, 1200);

    });

    /*=====================================================
        AOS
    =====================================================*/

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,
            once: true,
            easing: "ease-in-out"

        });

    }

    /*=====================================================
        TYPED JS
    =====================================================*/

    const typingElement = document.getElementById("typing");

    if (typingElement && typeof Typed !== "undefined") {

        new Typed("#typing", {

            strings: [

                "Embedded Software Engineer",

                "STM32 Firmware Developer",

                "ARM Cortex-M Programmer",

                "PIC16F877A Developer",

                "Embedded C Programmer",

                "RTOS Enthusiast"

            ],

            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true

        });

    }

    /*=====================================================
        FOOTER YEAR
    =====================================================*/

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /*=====================================================
        SCROLL PROGRESS BAR
    =====================================================*/

    const progressBar = document.getElementById("progressBar");

    function updateProgressBar() {

        if (!progressBar) return;

        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (window.scrollY / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    }

    window.addEventListener("scroll", updateProgressBar);

    /*=====================================================
        BACK TO TOP
    =====================================================*/

    const topButton = document.getElementById("topBtn");

    function handleTopButton() {

        if (!topButton) return;

        if (window.scrollY > 350) {

            topButton.style.display = "flex";

        } else {

            topButton.style.display = "none";

        }

    }

    window.addEventListener("scroll", handleTopButton);

    if (topButton) {

        topButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=====================================================
        ACTIVE NAVIGATION
    =====================================================*/

    const sections = document.querySelectorAll("section");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    function activateNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight

            ) {

                currentSection = section.id;

            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activateNavigation);

    /*=====================================================
        SMOOTH SCROLL
    =====================================================*/

    navigationLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const target =
                document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

    /*=====================================================
        NAVBAR SHADOW
    =====================================================*/

    const navbar = document.querySelector(".navbar");

    function navbarEffect() {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.style.boxShadow =
                "0 8px 25px rgba(0,229,255,.18)";

        } else {

            navbar.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", navbarEffect);

    /*=====================================================
        PART 1 END
        DO NOT ADD });
=====================================================*/
                              /*=====================================================
        HERO PARALLAX
    =====================================================*/

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        document.addEventListener("mousemove", (e) => {

            const x = (window.innerWidth / 2 - e.clientX) / 45;
            const y = (window.innerHeight / 2 - e.clientY) / 45;

            heroImage.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }

    /*=====================================================
        SKILL BAR ANIMATION
    =====================================================*/

    const skillBars = document.querySelectorAll(".value");

    const skillObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const bar = entry.target;

            const finalWidth = bar.dataset.width || bar.style.width;

            bar.style.width = "0";

            setTimeout(() => {

                bar.style.transition = "width 1.5s ease";

                bar.style.width = finalWidth;

            }, 200);

            skillObserver.unobserve(bar);

        });

    }, {

        threshold: 0.4

    });

    skillBars.forEach(bar => {

        if (bar.style.width !== "") {

            bar.dataset.width = bar.style.width;

        }

        skillObserver.observe(bar);

    });

    /*=====================================================
        FADE-IN ANIMATION
    =====================================================*/

    const fadeItems = document.querySelectorAll(

        ".about-content, .protocol-card, .project-card"

    );

    const fadeObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            fadeObserver.unobserve(entry.target);

        });

    }, {

        threshold: 0.2

    });

    fadeItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = ".8s ease";

        fadeObserver.observe(item);

    });

    /*=====================================================
        PROTOCOL LED BLINK
    =====================================================*/

    const leds = document.querySelectorAll(".led");

    if (leds.length > 0) {

        setInterval(() => {

            leds.forEach(led => {

                led.classList.toggle("active");

            });

        }, 700);

    }

    /*=====================================================
        COUNTER ANIMATION
    =====================================================*/

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let value = 0;

            const update = () => {

                const increment = Math.ceil(target / 80);

                value += increment;

                if (value < target) {

                    counter.textContent = value;

                    requestAnimationFrame(update);

                } else {

                    counter.textContent = target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /*=====================================================
        PROJECT IMAGE HOVER
    =====================================================*/

    const projectImages = document.querySelectorAll(".project-image img");

    projectImages.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transition = ".4s";

            img.style.transform = "scale(1.05)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    /*=====================================================
        HERO FADE
    =====================================================*/

    const heroSection = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!heroSection) return;

        heroSection.style.opacity =
            Math.max(0.25, 1 - window.scrollY / 800);

    });

    /*=====================================================
        PART 2 END
        DO NOT ADD });
    =====================================================*/
                              /*=====================================================
        TERMINAL TYPEWRITER
    =====================================================*/

    const terminal = document.querySelector(".terminal");

    if (terminal) {

        const spans = terminal.querySelectorAll("span");

        spans.forEach(span => {

            const text = span.textContent;

            span.textContent = "";

            let i = 0;

            const type = () => {

                if (i < text.length) {

                    span.textContent += text.charAt(i);

                    i++;

                    setTimeout(type, 25);

                }

            };

            const observer = new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        type();

                        observer.unobserve(entry.target);

                    }

                });

            }, {

                threshold: 0.4

            });

            observer.observe(span);

        });

    }

    /*=====================================================
        BUTTON RIPPLE EFFECT
    =====================================================*/

    document.querySelectorAll(".btn").forEach(button => {

        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const size = Math.max(this.clientWidth, this.clientHeight);

            const rect = this.getBoundingClientRect();

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.position = "absolute";
            ripple.style.borderRadius = "50%";
            ripple.style.background = "rgba(255,255,255,.35)";
            ripple.style.transform = "scale(0)";
            ripple.style.animation = "ripple .6s linear";
            ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
            ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
            ripple.style.pointerEvents = "none";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    /*=====================================================
        MOBILE MENU
    =====================================================*/

    const menuButton = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".nav-links");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("show");

        });

    }

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            if (mobileMenu) {

                mobileMenu.classList.remove("show");

            }

        });

    });

    /*=====================================================
        PREVENT IMAGE DRAGGING
    =====================================================*/

    document.querySelectorAll("img").forEach(img => {

        img.setAttribute("draggable", "false");

    });

    /*=====================================================
        CONSOLE MESSAGE
    =====================================================*/

    console.clear();

    console.log(
        "%cSasinathan Rangasamy",
        "color:#00e5ff;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cEmbedded Software Engineer",
        "color:#00ff99;font-size:15px;"
    );

    console.log(
        "%cSTM32 | ARM Cortex-M | PIC16F877A | Embedded C",
        "color:#ffffff;font-size:13px;"
    );

    console.log(
        "%cPortfolio Loaded Successfully 🚀",
        "color:#00e5ff;font-size:13px;"
    );

});
