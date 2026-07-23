const songs = [

{
title:"Song One",
artist:"Artist One",
file:"songs/song1.mp3"
},

{
title:"Song Two",
artist:"Artist Two",
file:"songs/song2.mp3"
},

{
title:"Song Three",
artist:"Artist Three",
file:"songs/song3.mp3"
}

];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const progressContainer =
document.getElementById("progress-container");
const volume =
document.getElementById("volume");

const playlist =
document.getElementById("playlist");

let songIndex = 0;
let isPlaying = false;

function loadSong(index){

audio.src = songs[index].file;
title.textContent = songs[index].title;
artist.textContent = songs[index].artist;

document.querySelectorAll("#playlist li")
.forEach(li=>li.classList.remove("active-song"));

if(document.querySelectorAll("#playlist li")[index]){
document.querySelectorAll("#playlist li")[index]
.classList.add("active-song");
}

}

function playSong(){

audio.play();

isPlaying = true;

playBtn.innerHTML =
'<i class="fas fa-pause"></i>';

}

function pauseSong(){

audio.pause();

isPlaying = false;

playBtn.innerHTML =
'<i class="fas fa-play"></i>';

}

playBtn.addEventListener("click",()=>{

if(isPlaying){
pauseSong();
}else{
playSong();
}

});

nextBtn.addEventListener("click",()=>{

songIndex++;

if(songIndex > songs.length - 1){
songIndex = 0;
}

loadSong(songIndex);
playSong();

});

prevBtn.addEventListener("click",()=>{

songIndex--;

if(songIndex < 0){
songIndex = songs.length - 1;
}

loadSong(songIndex);
playSong();

});

audio.addEventListener("timeupdate",()=>{

const {duration,currentTime} = audio;

const progressPercent =
(currentTime / duration) * 100;

progress.style.width =
`${progressPercent}%`;

document.getElementById("current-time")
.textContent =
formatTime(currentTime);

document.getElementById("duration")
.textContent =
formatTime(duration);

});

function formatTime(time){

if(isNaN(time)) return "0:00";

const minutes =
Math.floor(time / 60);

const seconds =
Math.floor(time % 60);

return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}

progressContainer.addEventListener("click",(e)=>{

const width = progressContainer.clientWidth;

const clickX = e.offsetX;

const duration = audio.duration;

audio.currentTime =
(clickX / width) * duration;

});

volume.addEventListener("input",()=>{

audio.volume = volume.value;

});

audio.addEventListener("ended",()=>{

songIndex++;

if(songIndex > songs.length - 1){
songIndex = 0;
}

loadSong(songIndex);
playSong();

});

songs.forEach((song,index)=>{

const li =
document.createElement("li");

li.textContent =
`${song.title} - ${song.artist}`;

li.addEventListener("click",()=>{

songIndex = index;

loadSong(songIndex);

playSong();

});

playlist.appendChild(li);

});

loadSong(songIndex);