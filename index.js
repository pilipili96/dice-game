for(var i=1;i<=2;i++){
    document.getElementsByClassName("img"+i)[0].setAttribute("src", "dice" + Math.floor((Math.random() * 6 + 1)) + ".png")
}


var dice1Value = document.images[0].src.substr(document.images[0].src.length-5,1);
var dice2Value = document.images[1].src.substr(document.images[1].src.length-5,1);

if (dice1Value > dice2Value){
    document.querySelector("h1").innerHTML = "  🚩 Player 1 won!"; 
}
else if(dice2Value > dice1Value){
    document.querySelector("h1").innerHTML = " Player 2 won! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "  Draw!";
}



// This is easy solution

// if (randomNumber1===1){
//     document.getElementsByClassName("img1")[0].setAttribute("src", "dice1.png",)
// }
// if (randomNumber1===2){
//     document.getElementsByClassName("img1")[0].setAttribute("src", "dice2.png",)
// }
// if (randomNumber1===3){
//     document.getElementsByClassName("img1")[0].setAttribute("src", "dice3.png",)
// }
// if (randomNumber1===4){
//     document.getElementsByClassName("img1")[0].setAttribute("src", "dice4.png",)
// }
// if (randomNumber1===5){
//     document.getElementsByClassName("img1")[0].setAttribute("src", "dice5.png",)
// }
// if (randomNumber1===6){
//     document.getElementsByClassName("img1")[0].setAttribute("src", "dice6.png",)
// }



//This is how we got to for loop solution

// var randomNumber1 = Math.floor((Math.random() * 6 + 1));
// var dice="dice" + randomNumber1 + ".png";
// document.getElementsByClassName("img1")[0].setAttribute("src", dice)

// document.getElementsByClassName("img1")[0].setAttribute("src", "dice" + Math.floor((Math.random() * 6 + 1)) + ".png")

// document.getElementsByClassName("img2")[0].setAttribute("src", "dice" + Math.floor((Math.random() * 6 + 1)) + ".png")





//Angela from Tutorial solution

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
