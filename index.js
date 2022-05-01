var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg = "dice" + randomnumber1 + ".png";
var randomImgSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgSource);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomImgSource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImgSource2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "!!! Player 1 Wins";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins !!!";
}
else{
    document.querySelector("h1").innerHTML = "!!! Draw !!!";
}
