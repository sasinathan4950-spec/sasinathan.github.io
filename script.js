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
/*=================================
        DARK / LIGHT MODE
=================================*/

const themeBtn = document.getElementById("themeToggle");

const themeIcon = themeBtn.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }else{

        localStorage.setItem("theme","dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});

/*=================================
        SMOOTH SCROLL
=================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/*=================================
        HERO IMAGE PARALLAX
=================================*/

const heroImage=document.querySelector(".hero-image img");

document.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x=(window.innerWidth/2-e.clientX)/40;

    const y=(window.innerHeight/2-e.clientY)/40;

    heroImage.style.transform=
    `translate(${x}px,${y}px)`;

});

/*=================================
        NAVBAR SHADOW
=================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow=
        "0 8px 30px rgba(0,229,255,.18)";

    }else{

        navbar.style.boxShadow="none";

    }

});

/*=================================
        SKILL CARD ANIMATION
=================================*/

const skillCards=document.querySelectorAll(".skill-card");

const skillObserver=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},

{

threshold:.25

}

);

skillCards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s";

    skillObserver.observe(card);

});

/*=================================
        PROJECT CARD ANIMATION
=================================*/

const projectCards=document.querySelectorAll(".project-card");

const projectObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.2

}

);

projectCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

projectObserver.observe(card);

});

/*=================================
        ABOUT CARD ANIMATION
=================================*/

const infoCards=document.querySelectorAll(".info-card");

infoCards.forEach((card,index)=>{

card.style.animationDelay=`${index*0.2}s`;

});

/*=================================
        TERMINAL TYPING EFFECT
=================================*/

const terminal=document.querySelector(".terminal pre");

if(terminal){

const terminalText=terminal.textContent;

terminal.textContent="";

let i=0;

const terminalObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeTerminal();

terminalObserver.disconnect();

}

});

}

);

terminalObserver.observe(terminal);

function typeTerminal(){

if(i<terminalText.length){

terminal.textContent+=terminalText.charAt(i);

i++;

setTimeout(typeTerminal,15);

}

}

}
/*=================================
        ACHIEVEMENT COUNTERS
=================================*/

const counters=document.querySelectorAll(".achievement-card h3");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const value=counter.innerText;

const number=parseInt(value);

if(!isNaN(number)){

let start=0;

const timer=setInterval(()=>{

start++;

counter.innerText=start+"+";

if(start>=number){

clearInterval(timer);

counter.innerText=value;

}

},40);

}

counterObserver.unobserve(counter);

}

});

},

{

threshold:0.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=================================
        BUTTON RIPPLE EFFECT
=================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const size=Math.max(btn.clientWidth,btn.clientHeight);

const rect=btn.getBoundingClientRect();

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=================================
        FLOATING ICONS
=================================*/

const icons=document.querySelectorAll(".hero-tech span");

icons.forEach((icon,index)=>{

icon.style.animation=
`floatingIcon 3s ease-in-out ${index*0.2}s infinite`;

});

/*=================================
        HERO FADE
=================================*/

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.opacity=1-window.scrollY/800;

}

});

/*=================================
        IMAGE HOVER EFFECT
=================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".4s";

img.style.transform="scale(1.03)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/*=================================
        CONTACT CARD HOVER
=================================*/

document.querySelectorAll(".contact-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateX(10px)";

item.style.transition=".3s";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateX(0)";

});

});

/*=================================
        MOBILE MENU
=================================*/

const nav=document.querySelector(".nav-links");

const menuBtn=document.createElement("button");

menuBtn.className="menu-btn";

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

document.querySelector(".navbar").appendChild(menuBtn);

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

/*=================================
        PREVENT IMAGE DRAG
=================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/*=================================
        CONSOLE MESSAGE
=================================*/

console.log(
"%cWelcome to Sasinathan Rangasamy's Portfolio",
"color:#00e5ff;font-size:18px;font-weight:bold;"
);

console.log(
"%cEmbedded Software Engineer | STM32 | ARM Cortex-M | PIC16F877A",
"color:#00ff99;font-size:14px;"
);

/*=================================
        PORTFOLIO READY
=================================*/

console.log("Portfolio Loaded Successfully 🚀");

});
