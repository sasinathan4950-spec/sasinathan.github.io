/*==================================================
    EMBEDDED DASHBOARD PORTFOLIO
    Author : Sasinathan Rangasamy
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=================================
            LOADER
    =================================*/

    window.addEventListener("load", () => {

        const loader = document.getElementById("loader");

        if (!loader) return;

        setTimeout(() => {

            loader.classList.add("hide");

            setTimeout(() => {
                loader.remove();
            }, 600);

        }, 1200);

    });

    /*=================================
            AOS INITIALIZATION
    =================================*/

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });

    }

    /*=================================
            TYPING EFFECT
    =================================*/

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        new Typed("#typing", {

            strings: [
                "Embedded Software Engineer",
                "Firmware Developer",
                "STM32 Developer",
                "ARM Cortex-M Engineer",
                "PIC16F877A Developer",
                "Embedded C Programmer"
            ],

            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true

        });

    }

    /*=================================
            CURRENT YEAR
    =================================*/

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /*=================================
            SCROLL PROGRESS BAR
    =================================*/

    const progressBar = document.getElementById("progressBar");

    window.addEventListener("scroll", () => {

        if (!progressBar) return;

        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (window.scrollY / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    });

    /*=================================
            BACK TO TOP BUTTON
    =================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 400) {

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

    /*=================================
            ACTIVE NAVIGATION
    =================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight

            ) {

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

    /*=================================
            SMOOTH SCROLL
    =================================*/

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
    /*=================================
            DARK / LIGHT MODE
    =================================*/

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        const icon = themeToggle.querySelector("i");

        if (localStorage.getItem("theme") === "light") {

            document.body.classList.add("light");

            if (icon) {

                icon.classList.replace("fa-moon", "fa-sun");

            }

        }

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const light = document.body.classList.contains("light");

            localStorage.setItem(
                "theme",
                light ? "light" : "dark"
            );

            if (icon) {

                if (light) {

                    icon.classList.replace("fa-moon", "fa-sun");

                } else {

                    icon.classList.replace("fa-sun", "fa-moon");

                }

            }

        });

    }

    /*=================================
            NAVBAR SHADOW
    =================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 60) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(0,229,255,.18)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

    /*=================================
            HERO PARALLAX
    =================================*/

    const heroImage =
        document.querySelector(".hero-image img");

    document.addEventListener("mousemove", (e) => {

        if (!heroImage) return;

        const x =
            (window.innerWidth / 2 - e.clientX) / 45;

        const y =
            (window.innerHeight / 2 - e.clientY) / 45;

        heroImage.style.transform =
            `translate(${x}px,${y}px)`;

    });

    /*=================================
            HERO FADE
    =================================*/

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        hero.style.opacity = Math.max(
            0,
            1 - window.scrollY / 700
        );

    });

    /*=================================
            SKILL CARD ANIMATION
    =================================*/

    const skillCards =
        document.querySelectorAll(".skill-card");

    const skillObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
fz
                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        }, {

            threshold: 0.25

        });

    skillCards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform = "translateY(40px)";

        card.style.transition = ".7s ease";

        skillObserver.observe(card);

    });

    /*=================================
            PROJECT CARD ANIMATION
    =================================*/

    const projects =
        document.querySelectorAll(".project-card");

    const projectObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        }, {

            threshold: 0.2

        });

    projects.forEach(card => {

        card.style.opacity = "0";

        card.style.transform = "translateY(60px)";

        card.style.transition = ".8s ease";

        projectObserver.observe(card);

    });

    /*=================================
            ACHIEVEMENT COUNTER
    =================================*/

    const counters =
        document.querySelectorAll(".counter");

    const counterObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const speed = target / 60;

                const update = () => {

                    current += speed;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(update);

                    } else {

                        counter.textContent = target;

                    }

                };

                update();

                counterObserver.unobserve(counter);

            });

        }, {

            threshold: 0.4

        });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });
        /*=================================
            TERMINAL TYPEWRITER
    =================================*/

    const terminal = document.querySelector(".terminal pre");

    if (terminal) {

        const text = terminal.textContent;

        terminal.textContent = "";

        let index = 0;

        const typeTerminal = () => {

            if (index < text.length) {

                terminal.textContent += text.charAt(index);

                index++;

                setTimeout(typeTerminal, 20);

            }

        };

        const terminalObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    typeTerminal();

                    terminalObserver.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.4

        });

        terminalObserver.observe(terminal);

    }

    /*=================================
            BUTTON RIPPLE EFFECT
    =================================*/

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const size = Math.max(this.clientWidth, this.clientHeight);

            const rect = this.getBoundingClientRect();

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                (e.clientX - rect.left - size / 2) + "px";

            ripple.style.top =
                (e.clientY - rect.top - size / 2) + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    /*=================================
            IMAGE HOVER EFFECT
    =================================*/

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transition = ".35s";

            img.style.transform = "scale(1.03)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    /*=================================
            PREVENT IMAGE DRAGGING
    =================================*/

    document.querySelectorAll("img").forEach(img => {

        img.setAttribute("draggable", "false");

    });

    /*=================================
            MOBILE MENU
    =================================*/

    const navLinks = document.querySelector(".nav-links");

    const menuBtn = document.querySelector(".menu-btn");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }

    /*=================================
            CLOSE MENU AFTER CLICK
    =================================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            if (navLinks) {

                navLinks.classList.remove("show");

            }

        });

    });

    /*=================================
            CONSOLE MESSAGE
    =================================*/

    console.log(
        "%cSasinathan Rangasamy Portfolio",
        "color:#00e5ff;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cEmbedded Software Engineer | STM32 | ARM Cortex-M | PIC16F877A",
        "color:#00ff99;font-size:14px;"
    );

    console.log(
        "%cPortfolio Loaded Successfully 🚀",
        "color:#ffffff;font-size:13px;"
    );

});
