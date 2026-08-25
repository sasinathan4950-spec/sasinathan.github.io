document.addEventListener("DOMContentLoaded", () => {

    AOS.init({
        duration: 1000,
        once: true
    });

    new Typed("#typing", {
        strings: [
            "Embedded Software Engineer",
            "Firmware Developer",
            "Embedded C Programmer",
            "STM32 Developer",
            "ARM Cortex-M Enthusiast"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });

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

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < 
