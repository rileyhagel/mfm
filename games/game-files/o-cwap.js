//Full Screen and finding the canvas element
var game = document.getElementById('game');
function fullScreen() {
    game.requestFullscreen();
}
fullScreen();

// Game Script
var ctx = game.getCon