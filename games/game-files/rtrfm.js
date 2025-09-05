var canvas = document.getElementById("canvas");
var buttonFullscreen = document.getElementById("fullscreen");


buttonFullscreen.addEventListener("click", function (){
    canvas.requestFullscreen();
});