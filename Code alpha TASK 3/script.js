const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

target.scrollIntoView({
behavior:"smooth"
});

});

});

window.addEventListener("scroll",()=>{

const cards=document.querySelectorAll(
".card,.project-card"
);

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

const screen=window.innerHeight;

if(position < screen-100){

card.classList.add("show");

}

});

});