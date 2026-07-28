/*====================================
DATE WITH ME ❤️
====================================*/
import { db, collection, addDoc } from "./firebase.js";

const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const openLetter = document.getElementById("openLetter");
const continueForm = document.getElementById("continueForm");

const finishBtn = document.getElementById("finishBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const funnyMessage = document.getElementById("funnyMessage");

const typingText = document.getElementById("typingText");

let musicPlaying = false;

/*==============================*/

function showScreen(id){

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    document
    .getElementById(id)
    .classList.add("active");

}

/*==============================*/

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🔊";

    }else{

        music.pause();

        musicBtn.innerHTML="🔇";

    }

});

/*==============================*/

startBtn.addEventListener("click",()=>{

    showScreen("screen2");

    if(!musicPlaying){

        music.play();

        musicPlaying=true;

    }

    typeWriter();

});

/*==============================*/

const text =

"Avant de répondre... laisse-moi te dire quelque chose ❤️";

let index = 0;

function typeWriter(){

    typingText.innerHTML="";

    index=0;

    let timer = setInterval(()=>{

        typingText.innerHTML += text.charAt(index);

        index++;

        if(index>=text.length){

            clearInterval(timer);

        }

    },45);

}

/*==============================*/
/* COEURS FLOTTANTS */
/*==============================*/

const heartsContainer =
document.querySelector(".hearts");

function createHeart(){

    const heart =
    document.createElement("span");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=
    (15+Math.random()*35)+"px";

    heart.style.opacity=Math.random();

    heart.style.animation=
    "floatHeart "+
    (6+Math.random()*6)
    +"s linear forwards";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,350);

/*==============================*/
/* Animation CSS injectée */
/*==============================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}

100%{

transform:
translateY(-120vh)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

/*==============================*/
/* Messages du bouton NON */
/*==============================*/

const noMessages = [

"😅 Tu es vraiment sûre ?",
"🥺 Réfléchis encore...",
"👉 Promis, je suis sympa.",
"🍕 Et si je t'invitais à manger ?",
"😂 Tu n'abandonnes jamais hein ?",
"❤️ Donne-moi une chance.",
"😎 Je suis certain qu'on passerait un bon moment.",
"🙈 Bon... essaie encore.",
"🤣 Je vais continuer à m'enfuir !"

];

let noIndex = 0;

/*==============================*/
/* Bouton NON qui fuit */
/*==============================*/

function moveNoButton(){

    const maxX =
        window.innerWidth - noBtn.offsetWidth - 40;

    const maxY =
        window.innerHeight - noBtn.offsetHeight - 40;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transition = ".25s";

    funnyMessage.innerHTML =
        noMessages[noIndex % noMessages.length];

    noIndex++;

    /* Le bouton OUI devient de plus en plus grand */

    const current =
        parseFloat(getComputedStyle(yesBtn).fontSize);

    yesBtn.style.fontSize =
        (current + 2) + "px";

    yesBtn.style.padding =
        (18 + noIndex * 1.5) + "px " +
        (45 + noIndex * 3) + "px";
}

/*==============================*/
/* Détection souris */
/*==============================*/

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", moveNoButton);

window.addEventListener("resize",()=>{

    noBtn.style.left="";
    noBtn.style.top="";
    noBtn.style.position="relative";

});

/*==============================*/
/* Bouton OUI */
/*==============================*/

yesBtn.addEventListener("click",()=>{

    confetti({

        particleCount:250,

        spread:180,

        origin:{
            y:.6
        }

    });

    setTimeout(()=>{

        showScreen("screen3");

    },900);

});

/*==============================*/
/* Lettre */
/*==============================*/

openLetter.addEventListener("click",()=>{

    showScreen("screen4");

});

/*==============================*/
/* Continuer */
/*==============================*/

continueForm.addEventListener("click",()=>{

    showScreen("screen5");

});

/*==============================*/
/* Petit effet d'apparition */
/*==============================*/

const observer = new MutationObserver(()=>{

    const active =
    document.querySelector(".screen.active");

    active.animate(

        [

            {

                opacity:0,

                transform:"scale(.95)"

            },

            {

                opacity:1,

                transform:"scale(1)"

            }

        ],

        {

            duration:500,

            easing:"ease"

        }

    );

});

observer.observe(document.body,{

    subtree:true,

    attributes:true,

    attributeFilter:["class"]

});

/*==============================*/
/* Validation du formulaire */
/*==============================*/

finishBtn.addEventListener("click",()=>{

    const date=document.getElementById("date").value;
    const heure=document.getElementById("heure").value;
    const activite=document.getElementById("activity").value;
    const lieu=document.getElementById("lieu").value;
 
    addDoc(collection(db,"rendezvous"),{

date: date,

heure: heure,

activite: activite,

lieu: lieu,

createdAt: new Date()

})
.then(()=>{

console.log("Rendez-vous enregistré ❤️");

})
.catch((error)=>{

console.log("Erreur :",error);

});

    if(date==="" || heure==="" || lieu===""){

        alert("❤️ Remplis tous les champs avant de continuer.");

        return;

    }

    document.getElementById("resumeDate").innerHTML=date;
    document.getElementById("resumeHeure").innerHTML=heure;
    document.getElementById("resumeActivity").innerHTML=activite;
    document.getElementById("resumeLieu").innerHTML=lieu;

    /* Feu d'artifice */

    for(let i=0;i<6;i++){

        setTimeout(()=>{

            confetti({

                particleCount:120,

                spread:120,

                startVelocity:60,

                origin:{

                    x:Math.random(),

                    y:Math.random()*0.5

                }

            });

        },i*350);

    }

    /* Fondu de la musique */

    let volume=music.volume;

    let fade=setInterval(()=>{

        if(volume>0.25){

            volume-=0.05;

            music.volume=volume;

        }else{

            clearInterval(fade);

        }

    },120);

    showScreen("screen6");

});

/*==============================*/
/* Animation du ticket */
/*==============================*/

const ticket=document.querySelector(".ticket");

const ticketObserver=new MutationObserver(()=>{

    if(document.getElementById("screen6").classList.contains("active")){

        ticket.animate(

        [

            {

                transform:"translateY(100px) scale(.8)",

                opacity:0

            },

            {

                transform:"translateY(0) scale(1)",

                opacity:1

            }

        ],

        {

            duration:900,

            easing:"ease-out"

        });

    }

});

ticketObserver.observe(document.body,{

subtree:true,

attributes:true,

attributeFilter:["class"]

});

/*==============================*/
/* Boutons brillants */
/*==============================*/

setInterval(()=>{

    document.querySelectorAll("button").forEach(btn=>{

        btn.animate([

        {

            boxShadow:"0 0 0 rgba(255,255,255,0)"

        },

        {

            boxShadow:"0 0 35px rgba(255,255,255,.9)"

        },

        {

            boxShadow:"0 0 0 rgba(255,255,255,0)"

        }

        ],{

            duration:1800

        });

    });

},4000);

/*==============================*/
/* Pluie de coeurs finale */
/*==============================*/

function heartExplosion(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-50px";

        heart.style.fontSize=(20+Math.random()*25)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="99999";

        heart.style.transition="4s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            "translateY(120vh) rotate("+
            (Math.random()*720)+"deg)";

            heart.style.opacity="0";

        },50);

        setTimeout(()=>{

            heart.remove();

        },4200);

    }

}

/*==============================*/

const finalObserver=new MutationObserver(()=>{

    if(document.getElementById("screen6").classList.contains("active")){

        heartExplosion();

    }

});

finalObserver.observe(document.body,{

subtree:true,

attributes:true,

attributeFilter:["class"]

});

/*==============================*/
/* Petit message de bienvenue */
/*==============================*/

console.log("❤️ Date With Me - Créé avec amour ❤️");