const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;
showImage();

});

});

function showImage(){

lightbox.style.display="flex";
lightboxImg.src=images[currentIndex].src;

}

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

nextBtn.addEventListener("click",()=>{

currentIndex++;

if(currentIndex >= images.length){
currentIndex=0;
}

showImage();

});

prevBtn.addEventListener("click",()=>{

currentIndex--;

if(currentIndex < 0){
currentIndex=images.length-1;
}

showImage();

});

window.addEventListener("click",(e)=>{

if(e.target===lightbox){
lightbox.style.display="none";
}

});

const filterButtons=document.querySelectorAll(".filter-buttons button");
const galleryItems=document.querySelectorAll(".gallery .image");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active");
button.classList.add("active");

let filter=button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all" || item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});