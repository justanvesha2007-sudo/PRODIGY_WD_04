/*=========================================
        PORTFOLIO - JAVASCRIPT PART 1
=========================================*/

// ================================
// MOBILE NAVBAR
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(5,8,22,.85)";
        navbar.style.backdropFilter="blur(30px)";
        navbar.style.boxShadow="0 10px 40px rgba(0,0,0,.4)";

    }

    else{

        navbar.style.background="rgba(255,255,255,.06)";
        navbar.style.boxShadow="none";

    }

});



// ================================
// HERO FADE-IN
// ================================

window.addEventListener("load",()=>{

    const heroContent=document.querySelector(".hero-content");

    heroContent.style.opacity="0";
    heroContent.style.transform="translateY(40px)";

    setTimeout(()=>{

        heroContent.style.transition="1.2s ease";

        heroContent.style.opacity="1";
        heroContent.style.transform="translateY(0px)";

    },300);

});




// ================================
// FLOATING PHOTO EFFECT
// ================================

const photos=document.querySelectorAll(".photo");

photos.forEach((photo,index)=>{

    photo.animate(

        [

            {

                transform:`translateY(0px) rotate(${index%2===0?5:-5}deg)`

            },

            {

                transform:`translateY(-18px) rotate(${index%2===0?5:-5}deg)`

            },

            {

                transform:`translateY(0px) rotate(${index%2===0?5:-5}deg)`

            }

        ],

        {

            duration:4500+index*700,

            iterations:Infinity

        }

    );

});




// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});




// ================================
// SCROLL INDICATOR
// ================================

const scrollIndicator=document.querySelector(".scroll-indicator");

window.addEventListener("scroll",()=>{

    if(window.scrollY>150){

        scrollIndicator.style.opacity="0";

    }

    else{

        scrollIndicator.style.opacity="1";

    }

});




// ================================
// BUTTON GLOW
// ================================

const buttons=document.querySelectorAll(".btn-primary,.btn-secondary");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px) scale(1)";

    });

});




// ================================
// CURSOR GLOW
// ================================

const glow=document.createElement("div");

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="20px";
glow.style.height="20px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="rgba(34,211,238,.5)";
glow.style.filter="blur(12px)";
glow.style.zIndex="9999";

window.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-10+"px";

    glow.style.top=e.clientY-10+"px";

});




// ================================
// HERO PARALLAX
// ================================

window.addEventListener("scroll",()=>{

    let value=window.scrollY;

    const gallery=document.querySelector(".hero-gallery");

    gallery.style.transform=`translateY(${value*0.15}px)`;

});




// ================================
// STICKER MOVEMENT
// ================================

const stickers=document.querySelectorAll(".sticker");

window.addEventListener("mousemove",(e)=>{

    let x=(window.innerWidth/2-e.pageX)/60;

    let y=(window.innerHeight/2-e.pageY)/60;

    stickers.forEach(sticker=>{

        sticker.style.transform=`translate(${x}px,${y}px)`;

    });

});




// ================================
// CONSOLE MESSAGE
// ================================

console.log("%c🚀 Welcome to Anvesha's Portfolio","color:#8B5CF6;font-size:20px;font-weight:bold;");
/*=========================================
        ABOUT SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll("#about");

window.addEventListener("scroll", revealSection);

function revealSection() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}
/*=========================================
        SKILL CARD ANIMATION
=========================================*/

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

skillCards.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(60px)";

    card.style.transition=`${0.7+index*0.08}s`;

    observer.observe(card);

});
/*=========================================
        PROJECT SCROLL REVEAL
=========================================*/

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = ".8s ease";

        }

    });

}, {
    threshold: 0.2
});

projectCards.forEach((card) => {

    projectObserver.observe(card);

});
/*=========================================
    ACHIEVEMENT SCROLL REVEAL
=========================================*/

const achievementCards = document.querySelectorAll(".achievement-card");

const achievementObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

            entry.target.style.transition=".8s ease";

        }

    });

},{
    threshold:0.2
});

achievementCards.forEach(card=>{

    achievementObserver.observe(card);

});
/*=========================================
        JAVASCRIPT PART 2
=========================================*/


//=========================================
// SHOOTING STARS
//=========================================

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*250+"px";

    star.style.animationDuration=(1+Math.random()*1.5)+"s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2200);

}

setInterval(createShootingStar,3000);



//=========================================
// RANDOM STAR TWINKLE
//=========================================

const stars=document.querySelectorAll("#stars,#stars2,#stars3");

setInterval(()=>{

    stars.forEach(star=>{

        star.style.opacity=Math.random();

    });

},1200);




//=========================================
// CONTACT FORM
//=========================================

const form=document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const button=this.querySelector("button");

button.innerHTML="🚀 Message Sent";

button.style.background="#22D3EE";
button.style.color="#050816";

setTimeout(()=>{

button.innerHTML="🚀 Send Message";

button.style.background="linear-gradient(90deg,#8B5CF6,#3B82F6)";
button.style.color="white";

this.reset();

},2500);

});

}




//=========================================
// BACK TO TOP
//=========================================

const topBtn=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";
topBtn.style.pointerEvents="auto";

}

else{

topBtn.style.opacity="0";
topBtn.style.pointerEvents="none";

}

});




//=========================================
// NAVBAR ACTIVE LINK
//=========================================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active-link");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active-link");

}

});

});




//=========================================
// PARALLAX GLOW
//=========================================

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

document.body.style.backgroundPosition=

`${50+x*5}% ${50+y*5}%`;

});




//=========================================
// FLOATING EFFECT
//=========================================

const cards=document.querySelectorAll(

".skill-card,.project-card,.achievement-card,.summary-card"

);

cards.forEach((card,index)=>{

card.animate(

[

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],

{

duration:4000+(index*250),

iterations:Infinity

}

);

});




//=========================================
// COUNTER ANIMATION
//=========================================

const counters=document.querySelectorAll(

".summary-card h3,.stat-card h3"

);

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let counter=entry.target;

let target=parseInt(counter.innerText);

if(isNaN(target)) return;

let count=0;

let speed=target/40;

let update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});




//=========================================
// PAGE LOADER
//=========================================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},100);

});




//=========================================
// CONSOLE MESSAGE
//=========================================

console.log("%c✨ Welcome to Anvesha's Space Portfolio ✨",

"font-size:24px;color:#22D3EE;font-weight:bold;");