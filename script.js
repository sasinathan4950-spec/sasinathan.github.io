/*==================================================
    EMBEDDED DASHBOARD PORTFOLIO
    Author : Sasinathan Rangasamy
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=================================
            AOS
    =================================*/

    AOS.init({

        duration:1000,
        once:true,
        easing:"ease-in-out"

    });

    /*=================================
            LOADER
    =================================*/

    const loader=document.getElementById("loader");

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.visibility="hidden";

        },1200);

    });

    /*=================================
            TYPING EFFECT
    =================================*/

    new Typed("#typing",{

        strings:[

            "Embedded Software Engineer",

            "Firmware Developer",

            "STM32 Developer",

            "ARM Cortex-M Engineer",

            "PIC16F877A Developer",

            "Embedded C Programmer"

        ],

        typeSpeed:70,

        backSpeed:40,

        backDelay:1500,

        loop:true

    });

    /*=================================
            CURRENT YEAR
    =================================*/

    document.getElementById("year").textContent=

    new Date().getFullYear();

    /*=================================
            SCROLL PROGRESS BAR
    =================================*/

    const progress=document.getElementById("progressBar");

    window.addEventListener("scroll",()=>{

        const total=

        document.documentElement.scrollHeight-

        document.documentElement.clientHeight;

        const progressWidth=

        (window.scrollY/total)*100;

        progress.style.width=

        progressWidth+"%";

    });

    /*=================================
            BACK TO TOP
    =================================*/

    const topBtn=document.getElementById("topBtn");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400)

            topBtn.style.display="block";

        else

            topBtn.style.display="none";

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*=================================
            ACTIVE NAVIGATION
    =================================*/

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const sectionTop=

            section.offsetTop-180;

            if(window.scrollY>=sectionTop){

                current=section.id;

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.href.includes(current))

                link.classList.add("active");

        });

    });

});
