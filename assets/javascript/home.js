var string = "SPIDERMAN";
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


var button2 = document.querySelector('.button2')
function hover(){
    button2.style.backgroundColor="red";
    button2.style.color="white";
	button2.style.fontSize="bold";
    button2.style.boxShadow="0 15px 50px  #ffffff inset, 0 5px 50px  #ffffff,0 5px 50px  #ffffff"
        
}
button2.addEventListener("mouseover",hover)
button2.addEventListener("mouseout",unblurt)
function unblurt()
{
    button2.style.backgroundColor= "transparent" 
    button2.style.color= "white"
    button2.style.boxShadow="none"

}
var btn= document.querySelectorAll('.button1')
for ( let i=0; i<btn.length; i++ ){
btn[i].addEventListener("mouseover",hover)

 function hover(){
    btn[i].style.backgroundColor="red"
    btn[i].style.color="white"
    btn[i].style.fontSize="bold"
    btn[i].style.boxShadow="0 15px 50px  #ffffff inset, 0 5px 50px  #ffffff,0 5px 50px  #ffffff"
        
}
btn[i].addEventListener("mouseout",unblurt)
function unblurt()
{
    btn[i].style.backgroundColor="white"
    btn[i].style.color="#b11313"
    btn[i].style.boxShadow="none"

}

}

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

