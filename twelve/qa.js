// Force a server reload to bypass the browser cache. This ensures that new questions are shown.
function reload() {
    window.location.replace(window.location.pathname);
}
                    
document.open();
var topics = [
    [
        "Why did you open a Q&amp;A column? <br>- Riley",
        "Well, web codin' geek hoo mayd the main MFM page, because iym reelee smart and peepole no to kum tu mee for there qeschins beekuz iye no all thu ansurs.<br>- Twelve"
    ],
    [
        "Twelve, What do you know about gardening? How do I keep pests away from my plants?<br><br>Sincerly,<br>Gardening in the Pacific Northwest<br><br>Sent from my iPhone",
        "Well, Gardening in the Pacific Northwest Sent from my iPhone, I actually know lots about gardening. You know, your name is kinda long. I think I'll just call you Gard. Or maybe G.I.P.N.W. Gip-En-Doubleyoo. Hmmm. Anyways, Gard, about your question, if you have pests in you garden, I have a few tricks I can teach you. First, let's determine your type of pest.<br><table><thead><tr><th>Pest Class</th><th>Pests In Said Class</th></tr></thead><tbody><tr><td>Large</td><td>Bears, Cougars, Montain Lions, Cougars, Pumas, Bears, Abomidimidabibul Snowman, Bigfoot, etc.</td></tr><tr><td>Medium</td><td>Squirrels, Chipmunks, Badgers, Cobras, Garter Snakes, Groundhogs, Moles, Crows, etc.</td></tr><tr><td>Small</td><td>Flies, Gnats, Mosquitos, Wasps, Hornets, Yellow Jackets, Wasps, Yellow Jackets, Hornets, Flies, Mosquitos, etc.</td></tr></tbody></table><br>For Large and Medium class pests, I sugest the Burmese Tiger Pit:<br><img src='qa-files/burmese-tiger-pit.png' style='width: 100%'><br>For Small and Small class pests, I would use a very simple approach: Take a match (or two), and some dry grass clippings left out in the compost pile, and some gasoline. This is one of those times where gasoline can solve your problems. Whenever I have a problem, I try to think of a way to use gasoline to solve it. Now scatter the grass throughtout your garden, and soak it with gasoline. The heat will kill the pests and the larve, effectively removing the pasts. As for attracting future pests, this method also effectively removes your garden, leaving nothing to draw the attention of pests.<br>Well, I hope my solution works for you. <em>Do</em> please try this at home, and send me a video.<br><br>Sincerly,<br>Twelve"
    ],
    [
        "NEW QUESTION BEING ANSWERED...",
        ""
    ]
];
topics.forEach((value, index) => {
    document.write(
        "<div class='qa-topic' id='qnum-" + index + "'><span>" + value[0] + "</span><button onclick='displayTopic(" + index + ")'>Open</button><hr></div>"
    );
});
function displayTopic(index) {
    var dialog = document.getElementById("qa-dialog");
    var answerBox = document.getElementById("qa-answer");
    var Q = topics[index][0];
    var A = topics[index][1];
    answerBox.innerHTML = "<button onclick='closeTopic()'>Close</button><h3>Q: " + Q + "</h3><p><a href='#qnum-" + index + "'>Open Permalink</a></p><p><big>A: </big>" + A + "</p><button onclick='closeTopic()'>Close</button>";
    dialog.show();
}
function closeTopic() {
    var dialog = document.getElementById("qa-dialog");
    dialog.close();
}