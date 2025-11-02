var comics = [
    ["nerd-squad-1.jpg", "Man, I wish I could make cool slides like that."],
    ["nerd-squad-2.jpg", "<pre>Math ERROR<br><br>[AC]  :Cancel<br>[<][>]:Goto<pre>"],
    ["nerd-squad-3.jpg", "If only it were practical... I wonder how he stuck on those fake arms."],
    ["nerd-squad-4.jpg", "Oops, I actually forgot to draw that guy's head (in the KA-CHUNK! panel) before I scanned it in to my computer."],
    ["nerd-squad-5.jpg", "How to turn gears into quality-ground wheels.<br>P.S.: I accidentally drew an extra crown gear on one of the panels... You can probably figure it out."]
];
var currentNum = comics.length - 1;
var comicBox = document.getElementById("comicBox");
var commentBox = document.getElementById("commentBox");
var permalinkAnchor = document.getElementById("permalink");

function update() {
    if (currentNum > comics.length - 1) {
        currentNum = comics.length - 1;
    }
    if (currentNum < 0) {
        currentNum = 0;
    }
    window.location.assign("nerd-squad.htm" + "?n=" + currentNum);
}
function loadOld() {
    currentNum = 0;
    update();
}
function loadPrev() {
    currentNum = --currentNum;
    update();
}
function loadRand() {
    currentNum = Math.floor(Math.random() * comics.length);
    update();
}
function loadNext() {
    currentNum = ++currentNum;
    update();
}
function loadNew() {
    currentNum = comics.length - 1;
    update();
}

var urlParams = new URLSearchParams(window.location.search);
var number = urlParams.get('n');
if (number !== null) {
    currentNum = number;
}

var comicItem = comics[currentNum];

comicBox.src = "img/" + comicItem[0];
comicBox.title = comicItem[1];
commentBox.innerHTML = comicItem[1];
permalinkAnchor.innerHTML = "Permalink: https://rileyhagel.github.io/mfm/twelve/nerd-squad/nerd-squad.htm?n=" + currentNum;
permalinkAnchor.href = "https://rileyhagel.github.io/mfm/twelve/nerd-squad/nerd-squad.htm?n=" + currentNum;