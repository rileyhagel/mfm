var bodytag = document.getElementsByTagName("body")[0];
var h1tags = document.getElementsByTagName("h1");
var h2tags = document.getElementsByTagName("h2");
var h3tags = document.getElementsByTagName("h3");
var h4tags = document.getElementsByTagName("h4");
var h5tags = document.getElementsByTagName("h5");
var h6tags = document.getElementsByTagName("h6");
var ptags = document.getElementsByTagName("p");
var atags = document.getElementsByTagName("a");
var imgtags = document.getElementsByTagName("img");
var ultags = document.getElementsByTagName("ul");
var oltags = document.getElementsByTagName("o1");
var litags = document.getElementsByTagName("li");
var divtags = document.getElementsByTagName("div");
var spantags = document.getElementsByTagName("span");
var tabletags = document.getElementsByTagName("table");
var trtags = document.getElementsByTagName("tr");
var tdtags = document.getElementsByTagName("td");

/////////////////////
//                 //
//  START THE FUN  //
//                 //
/////////////////////
function fun() {
    
bodytag.style = "background-color:#000000;color:#ffffff";

var imgwidth = 0;
var widthgodown = false;
setInterval(() => {
    [...imgtags].forEach((element) => {
        element.width = imgwidth;
        element.height = 400;
        if (widthgodown == false) {
            imgwidth = imgwidth + 1;
        }
        if (widthgodown == true) {
            imgwidth = imgwidth - 1;
        }
        if (imgwidth == 1000) {
            widthgodown = true;
        }
        if (imgwidth == 0) {
            widthgodown = false;
        }
    });
}, 10);

setInterval(() => {
    [...h1tags].forEach((element) => {
        setTimeout(() => {element.style = "color: #ff0000";}, 1000);
        setTimeout(() => {element.style = "color: #00ff00";}, 2000);
        setTimeout(() => {element.style = "color: #0000ff";}, 3000);
    });
    [...h2tags].forEach((element) => {
        setTimeout(() => {element.style = "color: #ff00ff";}, 1000);
        setTimeout(() => {element.style = "color: #00ffff";}, 2000);
        setTimeout(() => {element.style = "color: #ffff00";}, 3000);
    });
    [...h3tags].forEach((element) => {
        setTimeout(() => {element.style = "color: #ff00ff";}, 500);
        setTimeout(() => {element.style = "color: #00ffff";}, 1000);
        setTimeout(() => {element.style = "color: #ffff00";}, 1500);
        setTimeout(() => {element.style = "color: #ff0000";}, 2000);
        setTimeout(() => {element.style = "color: #00ff00";}, 2500);
        setTimeout(() => {element.style = "color: #0000ff";}, 3000);
    });
    [...h4tags].forEach((element) => {
        setTimeout(() => {element.style = "color: #ff00ff";}, 250);
        setTimeout(() => {element.style = "color: #00ffff";}, 500);
        setTimeout(() => {element.style = "color: #ffff00";}, 750);
        setTimeout(() => {element.style = "color: #ff0000";}, 1000);
        setTimeout(() => {element.style = "color: #00ff00";}, 1250);
        setTimeout(() => {element.style = "color: #0000ff";}, 1500);
        setTimeout(() => {element.style = "color: #ff00ff";}, 1750);
        setTimeout(() => {element.style = "color: #00ffff";}, 2000);
        setTimeout(() => {element.style = "color: #ffff00";}, 2250);
        setTimeout(() => {element.style = "color: #ff0000";}, 2500);
        setTimeout(() => {element.style = "color: #00ff00";}, 2750);
        setTimeout(() => {element.style = "color: #0000ff";}, 3000);
    });
    [...h5tags].forEach((element) => {
        setTimeout(() => {element.style = "color: #000000";}, 1500);
        setTimeout(() => {element.style = "color: #ffffff";}, 3000);
    });
    [...h6tags].forEach((element) => {
        setTimeout(() => {element.style = "color: #000000";}, 1500);
        setTimeout(() => {element.style = "color: #ffffff";}, 3000);
    });
    [...ptags].forEach((element) => {
        setTimeout(() => {element.style = "color: #000000";}, 750);
        setTimeout(() => {element.style = "color: #ffffff";}, 1500);
        setTimeout(() => {element.style = "color: #000000";}, 2250);
        setTimeout(() => {element.style = "color: #ffffff";}, 3000);
    });
    [...atags].forEach((element) => {
        element.href = "rileyhagel.github.io/mfm/games/web-enhancer.htm/";
        element.innerHTML = "Visit the Web Enhancer page!";
    });
    [...divtags].forEach((element) => {
        setTimeout(() => {element.style = "visibility: hidden;";}, 1500);
        setTimeout(() => {element.style = "visibility: visible;";}, 3000);
    });
}, 3000);
}