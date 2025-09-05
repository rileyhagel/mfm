var searchParams = new URLSearchParams(window.location.search);
var bananaQuery = searchParams.get("bananagraph");
var openGraph = document.getElementById("open-bananagraph");
var listFrame = document.getElementById("list");
var buttonLoad = document.getElementById("buttonLoad");

if (bananaQuery === null) {
    openGraph.src = "bananagraphs/blank.htm";
} else {
    window.location.replace("#openGraphHead");
    openGraph.src = "bananagraphs/" + bananaQuery + ".htm";
}

function loadList() {
    listFrame.src = "bananagraphs/list.htm";
}

buttonLoad.addEventListener("click", loadList);