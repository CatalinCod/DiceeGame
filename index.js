var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src" ,randomDiceImage );

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src" ,randomDiceImage );

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 a castigat!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 a castigat!";
}
else if (randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML ="Egal!";
}
else{
    document.querySelector("h1").innerHTML = " A aparut o eroare"
}