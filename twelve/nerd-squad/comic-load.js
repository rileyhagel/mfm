var comics = [
    ["nerd-squad-0.jpg", "This is a hotfix so people don't get confused when <code>nerd-squad.htm?n=2</code> gets them comic 3. Now, index zero <em>is</em> comic zero, and not 1."],
    ["nerd-squad-1.jpg", "Man, I wish I could make cool slides like that.<br>UPDATE November 5: Oh crap, I forgot the <var>x</var> in my equations! It should be <var>y</var>=<var>m</var><var>x</var>+<var>b</var>, but I did <var>y</var>=<var>m</var>+<var>b</var>. Please pretend that there is an <var>x</var> after the fractions in both equations. Whoops. I've <em>never</em> made that mistake in Algebra at least..."],
    ["nerd-squad-2.jpg", "<pre>Math ERROR<br><br>[AC]  :Cancel<br>[<][>]:Goto<pre>"],
    ["nerd-squad-3.jpg", "If only it were practical... I wonder how he stuck on those fake arms."],
    ["nerd-squad-4.jpg", "Oops, I actually forgot to draw that guy's head (in the KA-CHUNK! panel) before I scanned it in to my computer."],
    ["nerd-squad-5.jpg", "How to turn gears into quality-ground wheels.<br>P.S.: I accidentally drew an extra crown gear on one of the panels... You can probably figure it out."],
    ["nerd-squad-6.jpg", 'Here is a video of the trojan on YouTube. I did not make this video, and have absolutely nothing to do with it.<br><iframe width="560" height="315" src="https://www.youtube.com/embed/LSgk7ctw1HY?si=a1tZHvzl6IuxeGF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'],
    ["nerd-squad-7.jpg", "It's a wonder they aren't dead."],
    ["nerd-squad-8.jpg", "Tristen wrote those 'funny numbers' on my comic during Algebra one day."],
    ["nerd-squad-9.jpg", "Guess what happens when you draw dumb comics after a bunch of CAD assignments in Fusion 360?"],
    ["nerd-squad-10.jpg", "Binary and Hexidecimal lesson in Cybersecurity. And yes, I did enjoy the lesson."]
];
var currentNum = comics.length - 1;
var comicBox = document.getElementById("comicBox");
var commentBox = document.getElementById("commentBox");
var permalinkAnchor = document.getElementById("permalink");
var imgUrlAnchor = document.getElementById("imgurl");

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
permalinkAnchor.innerHTML = "https://rileyhagel.github.io/mfm/twelve/nerd-squad/nerd-squad.htm?n=" + currentNum;
permalinkAnchor.href = "https://rileyhagel.github.io/mfm/twelve/nerd-squad/nerd-squad.htm?n=" + currentNum;
imgUrlAnchor.innerHTML = "https://rileyhagel.github.io/mfm/twelve/nerd-squad/img/" + comicItem[0];
imgUrlAnchor.href = "https://rileyhagel.github.io/mfm/twelve/nerd-squad/img/" + comicItem[0];