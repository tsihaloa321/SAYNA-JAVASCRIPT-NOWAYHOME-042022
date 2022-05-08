//animation de Grand titre
var string = "UN HEROS";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); 

}
frameLooper();

//opacety sous titre
const title = document.querySelector("#text");
const valueOfTitle = title.textContent;
let j = 0;


const subtitle = document.querySelector(".description");

function opacityOfSubtitle() {
    subtitle.style.opacity = j;
    if (j < 1) {
        setTimeout("opacityOfSubtitle()", 100);
        j += 0.1;
    }
}

title.style.transform = "translateX(0%)"
opacityOfSubtitle();

//changement couleur de footer
const img1 = document.querySelector("#facebook");
const img2 = document.querySelector("#instagram");
const img3 = document.querySelector("#twitter");
const img4 = document.querySelector("#youtube");
const collectionOfLogo = [
    ["./assets/logo/logof.png", "./assets/logo/logoi.png", "./assets/logo/logot.png", "./assets/logo/logoy.png"],
    ["./assets/logo/logof-white.png", "./assets/logo/logoi-white.png", "./assets/logo/logot-white.png", "./assets/logo/logoy-white.png"]
];

facebook.addEventListener("mouseover", () => {facebook.src = collectionOfLogo[1][0]});
facebook.addEventListener("mouseout", () => {facebook.src = collectionOfLogo[0][0]});

instagram.addEventListener("mouseover", () => {instagram.src = collectionOfLogo[1][1]});
instagram.addEventListener("mouseout", () => {instagram.src = collectionOfLogo[0][1]});

twitter.addEventListener("mouseover", () => {twitter.src = collectionOfLogo[1][2]});
twitter.addEventListener("mouseout", () => {twitter.src = collectionOfLogo[0][2]});

youtube.addEventListener("mouseover", () => {youtube.src = collectionOfLogo[1][3]});
youtube.addEventListener("mouseout", () => {youtube.src = collectionOfLogo[0][3]});
