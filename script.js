/* =====================================================
   INITIALIZE AOS ANIMATION
===================================================== */

AOS.init({

    duration:1000,

    once:true,

    offset:120

});



/* =====================================================
   LOADING SCREEN
===================================================== */


window.addEventListener("load",()=>{


    const loader = document.getElementById("loader");


    setTimeout(()=>{


        loader.style.opacity="0";


        loader.style.visibility="hidden";


    },1500);



});



/* =====================================================
   MOBILE MENU
===================================================== */


const menuBtn =
document.querySelector(".menu-btn");


const navMenu =
document.querySelector(".navbar ul");



menuBtn.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});



/* CLOSE MENU AFTER CLICK */


document.querySelectorAll(".navbar ul li a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});



/* =====================================================
   DARK MODE
===================================================== */


const darkButton =
document.getElementById("darkMode");


darkButton.addEventListener("change",()=>{


    document.body.classList.toggle("light");


    if(
    document.body.classList.contains("light")
    ){

        localStorage.setItem(
        "theme",
        "light"
        );


    }

    else{


        localStorage.setItem(
        "theme",
        "dark"
        );


    }


});



/* SIMPAN MODE */

if(
localStorage.getItem("theme")
==="light"
){

    document.body.classList.add("light");

    darkButton.checked=true;

}



/* =====================================================
   CUSTOM CURSOR
===================================================== */


const cursor =
document.getElementById("cursor");



document.addEventListener("mousemove",(e)=>{


    cursor.style.left =
    e.clientX+"px";


    cursor.style.top =
    e.clientY+"px";



});



document.querySelectorAll("a,button")
.forEach(element=>{


    element.addEventListener("mouseenter",()=>{


        cursor.style.transform=
        "translate(-50%,-50%) scale(2)";


        cursor.style.background=
        "rgba(59,130,246,.3)";


    });



    element.addEventListener("mouseleave",()=>{


        cursor.style.transform=
        "translate(-50%,-50%) scale(1)";


        cursor.style.background=
        "transparent";


    });



});



/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */


const header =
document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){


        header.style.background=
        "rgba(15,23,42,.95)";


        header.style.boxShadow=
        "0 10px 30px rgba(0,0,0,.3)";


    }


    else{


        header.style.background=
        "rgba(15,23,42,.65)";


        header.style.boxShadow="none";


    }



});



/* =====================================================
   TYPING EFFECT
===================================================== */


const words=[

"Student In SMK N 4",

"Bujang Gadis",

"Major RPL",

"Web Developer "

];


let index=0;

let charIndex=0;

let deleting=false;



const typingElement =
document.querySelector(".hero-left h2");



function typing(){


    let current =
    words[index];



    if(!deleting){


        typingElement.textContent =
        current.substring(0,charIndex++);



        if(charIndex >
        current.length){


            deleting=true;


            setTimeout(typing,1000);


            return;


        }


    }


    else{


        typingElement.textContent =
        current.substring(0,charIndex--);



        if(charIndex===0){


            deleting=false;


            index++;



            if(index>=words.length){

                index=0;

            }


        }


    }



    setTimeout(typing,100);



}


typing();

/* =====================================================
   COUNTER ANIMATION
===================================================== */


const counters =
document.querySelectorAll(".counter-box h2");


let started=false;



function startCounter(){


    if(started) return;


    const counterSection =
    document.querySelector("#counter");


    const sectionTop =
    counterSection.offsetTop -
    window.innerHeight;


    if(window.scrollY > sectionTop){


        started=true;



        counters.forEach(counter=>{


            let target =
            parseInt(
            counter.innerText
            );


            let count=0;


            let speed =
            target / 100;



            let update = ()=>{


                count += speed;



                if(count < target){


                    counter.innerText =
                    Math.floor(count)+"+";


                    requestAnimationFrame(update);


                }


                else{


                    counter.innerText =
                    target+"+";


                }


            };


            update();


        });


    }


}



window.addEventListener(
"scroll",
startCounter
);




/* =====================================================
   SCROLL ACTIVE NAVIGATION
===================================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".navbar ul li a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        if(scrollY >= sectionTop){


            current =
            section.getAttribute("id");


        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");



        if(link.getAttribute("href")
        ==
        "#"+current){


            link.classList.add("active");


        }


    });



});



/* =====================================================
   SCROLL PROGRESS BAR
===================================================== */


const progressBar =
document.createElement("div");



progressBar.id =
"scroll-progress";



document.body.appendChild(
progressBar
);



window.addEventListener("scroll",()=>{


    let height =
    document.documentElement.scrollHeight
    -
    document.documentElement.clientHeight;



    let scroll =
    (window.scrollY / height)*100;



    progressBar.style.width =
    scroll+"%";



});



/* =====================================================
   BACK TO TOP BUTTON
===================================================== */


const topButton =
document.createElement("button");


topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';



topButton.id="topButton";



document.body.appendChild(
topButton
);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.classList.add("show");


    }

    else{


        topButton.classList.remove("show");


    }


});



topButton.onclick=()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


};




/* =====================================================
   FORM VALIDATION
===================================================== */


const form =
document.querySelector("form");



form.addEventListener("submit",(e)=>{


    e.preventDefault();



    const inputs =
    form.querySelectorAll(
    "input, textarea"
    );



    let valid=true;



    inputs.forEach(input=>{


        if(input.value.trim()===""){


            input.style.border =
            "2px solid red";


            valid=false;


        }


        else{


            input.style.border =
            "1px solid #3b82f6";


        }



    });



    if(valid){


        alert(
        "Message berhasil dikirim!"
        );


        form.reset();


    }



});



/* =====================================================
   PARTICLE BACKGROUND
===================================================== */


const particleContainer =
document.querySelector(".particles");



for(let i=0;i<50;i++){


    let particle =
    document.createElement("span");



    particle.className =
    "particle";



    particle.style.left =
    Math.random()*100+"%";



    particle.style.top =
    Math.random()*100+"%";



    particle.style.animationDelay =
    Math.random()*5+"s";



    particleContainer.appendChild(
    particle
    );


}




/* =====================================================
   CARD 3D EFFECT
===================================================== */


const cards =
document.querySelectorAll(
".service-card, .portfolio-card, .testimonial-card"
);



cards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    (e)=>{


        let rect =
        card.getBoundingClientRect();



        let x =
        e.clientX - rect.left;


        let y =
        e.clientY - rect.top;



        let rotateX =
        (y - rect.height/2)/15;



        let rotateY =
        (rect.width/2 - x)/15;



        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;


    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "rotateX(0) rotateY(0)";


    });



});



/* =====================================================
   IMAGE LAZY EFFECT
===================================================== */


const images =
document.querySelectorAll("img");



images.forEach(img=>{


    img.loading="lazy";


});



/* =====================================================
   YEAR AUTO UPDATE
===================================================== */


const year =
new Date().getFullYear();



const footerYear =
document.querySelector("footer p:last-child");



if(footerYear){


    footerYear.innerHTML =
    "© "+year+" All Rights Reserved.";


}



/* =====================================================
   CONSOLE MESSAGE
===================================================== */


console.log(

`
================================

 Welcome To My Portfolio 🚀

 Built With:
 HTML
 CSS
 JavaScript

================================
`

);

/* =====================================================
   PREMIUM CURSOR
===================================================== */


const dot =
document.querySelector(".cursor-dot");


const outline =
document.querySelector(".cursor-outline");



window.addEventListener(
"mousemove",
(e)=>{


    dot.style.left =
    e.clientX+"px";


    dot.style.top =
    e.clientY+"px";



    outline.animate({

        left:e.clientX+"px",

        top:e.clientY+"px"

    },

    {

        duration:500,

        fill:"forwards"

    });


});



/* HOVER EFFECT */


const hoverElements =
document.querySelectorAll(
"a,button,.service-card,.portfolio-card"
);



hoverElements.forEach(element=>{


    element.addEventListener(
    "mouseenter",
    ()=>{


        outline.style.width="80px";

        outline.style.height="80px";

        outline.style.background=
        "rgba(6,182,212,.2)";


    });



    element.addEventListener(
    "mouseleave",
    ()=>{


        outline.style.width="45px";

        outline.style.height="45px";

        outline.style.background=
        "transparent";


    });



});

/* =====================================================
   BACKGROUND MUSIC
===================================================== */


const music =
document.getElementById("bgMusic");


const musicBtn =
document.getElementById("musicBtn");



let playing=false;



musicBtn.addEventListener("click",()=>{


    if(!playing){


        music.play();


        playing=true;


        musicBtn.classList.add("active");


        musicBtn.innerHTML=
        '<i class="fa-solid fa-volume-high"></i>';


    }


    else{


        music.pause();


        playing=false;


        musicBtn.classList.remove("active");


        musicBtn.innerHTML=
        '<i class="fa-solid fa-volume-xmark"></i>';


    }


});

/* =====================================================
   TOAST NOTIFICATION
===================================================== */


const toast =
document.querySelector(".toast");



window.addEventListener("load",()=>{


    setTimeout(()=>{


        toast.classList.add("active");


    },1000);



    setTimeout(()=>{


        toast.classList.remove("active");


    },5000);



});

/* =====================================================
   SCROLL PROGRESS CIRCLE
===================================================== */


const progress =
document.querySelector(".scroll-progress");


const progressText =
document.querySelector(".scroll-progress span");



window.addEventListener("scroll",()=>{


    let scrollTop =
    document.documentElement.scrollTop;


    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    let percent =
    Math.round(
        (scrollTop / height) * 100
    );


    progressText.innerHTML =
    percent + "%";


    progress.style.background =
    `conic-gradient(
        #3b82f6 ${percent * 3.6}deg,
        #1e293b 0deg
    )`;


});

const transition =
document.querySelector(".page-transition");


document.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",()=>{


transition.classList.add("active");


setTimeout(()=>{

transition.classList.remove("active");


},700);


});


});

/* =====================================
   MINI CHATBOT
===================================== */


const chatBtn =
document.querySelector(".chat-btn");


const chatBox =
document.querySelector(".chat-box");



chatBtn.addEventListener("click",()=>{


    chatBox.classList.toggle("active");


});

/* =====================================
   CHATBOT REPLY SYSTEM
===================================== */


const sendBtn =
document.getElementById("sendChat");


const chatInput =
document.getElementById("chatMessage");


const chatContent =
document.getElementById("chatContent");



sendBtn.addEventListener("click", sendMessage);



chatInput.addEventListener("keypress",(e)=>{

    if(e.key === "Enter"){

        sendMessage();

    }

});



function sendMessage(){


    let message =
    chatInput.value.toLowerCase();


    if(message.trim()==""){

        return;

    }



    // tampilkan pesan user

    chatContent.innerHTML += `

    <p class="user-chat">

    ${message}

    </p>

    `;



    chatInput.value="";



    let reply="";



    // jawaban chatbot

    if(message.includes("halo") ||
       message.includes("hai")){


        reply =
        "Halo 👋 Ada yang bisa saya bantu?";


    }


    else if(message.includes("nama")){


        reply =
        "Nama saya Kasmah AI 🤖";


    }


    else if(message.includes("project")){


        reply =
        "Saya memiliki beberapa project website.";


    }


    else if(message.includes("skill")){


        reply =
        "Skill saya HTML, CSS, JavaScript, dan Web Development.";


    }


    else if(message.includes("kontak")){


        reply =
        "Kamu bisa menghubungi melalui Contact di website ini.";


    }


    else{


        reply =
        "Maaf, saya belum mengerti. Coba tanyakan tentang project, skill, atau kontak.";

    }



    // tampilkan jawaban bot

    setTimeout(()=>{


        chatContent.innerHTML += `

        <p class="bot-chat">

        🤖 ${reply}

        </p>

        `;



        chatContent.scrollTop =
        chatContent.scrollHeight;



    },700);



}

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        const line = document.getElementById(
            skill.dataset.line
        );

        line.style.stroke = "#22d3ee";
        line.style.strokeWidth = "4";
        line.style.opacity = "1";

    });

    skill.addEventListener("mouseleave", () => {

        const line = document.getElementById(
            skill.dataset.line
        );

        line.style.stroke = "#22d3ee";
        line.style.strokeWidth = "2";
        line.style.opacity = ".3";

    });

});

skill.addEventListener("mouseenter",()=>{

document.querySelector(".center-node")

.classList.add("active");

});

skill.addEventListener("mouseleave",()=>{

document.querySelector(".center-node")

.classList.remove("active");

});

document.querySelectorAll(".skill").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.transform=`

rotateY(${(x-40)/8}deg)

rotateX(${-(y-30)/8}deg)

`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

const title=document.querySelector(".center-title");

document.querySelector(".html")

.addEventListener("click",()=>{

title.innerHTML="HTML <br>95%";

});

const audio=new Audio("hover.mp3");

skill.addEventListener("mouseenter",()=>{

audio.currentTime=0;

audio.play();

});