// ===============================
// InkedByGuero Portfolio Script
// ===============================

// Mouse Glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// Fade In Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Loading Screen
window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity 1s ease";

        document.body.style.opacity="1";

    },100);

});

// Smoke Particle Effect

function createSmoke(){

    const smoke=document.createElement("div");

    smoke.style.position="fixed";

    smoke.style.width=Math.random()*80+20+"px";

    smoke.style.height=smoke.style.width;

    smoke.style.borderRadius="50%";

    smoke.style.background="rgba(255,255,255,.04)";

    smoke.style.left=Math.random()*window.innerWidth+"px";

    smoke.style.bottom="-100px";

    smoke.style.pointerEvents="none";

    smoke.style.filter="blur(18px)";

    smoke.style.zIndex="0";

    smoke.style.transition="all 12s linear";

    document.body.appendChild(smoke);

    setTimeout(()=>{

        smoke.style.transform=`translateY(-${window.innerHeight+300}px)`;

        smoke.style.opacity="0";

    },50);

    setTimeout(()=>{

        smoke.remove();

    },12000);

}

setInterval(createSmoke,1200);

// Gallery Hover Glow
document.querySelectorAll(".gallery-item img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.boxShadow="0 0 40px rgba(255,255,255,.25)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.boxShadow="none";

    });

});

// Navbar Background on Scroll

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        nav.style.background="rgba(0,0,0,.95)";

    }else{

        nav.style.background="rgba(10,10,10,.8)";

    }

});

// Hero Text Animation

const heroTitle=document.querySelector(".hero h1");

let visible=true;

setInterval(()=>{

    heroTitle.style.opacity=visible?".85":"1";

    visible=!visible;

},1200);
