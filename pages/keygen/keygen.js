const button = document.getElementById("playMusicBtn");
const audio = document.getElementById("sonyVegas9x");

button.addEventListener("click", function (){
    audio.currentTime = 0;
    audio.play();
});