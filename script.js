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
        typeSpeed: 70,
        backSpeed: 40,
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

});
