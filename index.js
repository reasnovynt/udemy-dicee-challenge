var diceNum = [1, 2, 3, 4, 5, 6]; 
    randomNum1 = diceNum[Math.round(Math.random() * 5)];
    randomNum2 = diceNum[Math.round(Math.random() * 5)];

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");

if (randomNum1 > randomNum2) {
    document.querySelector("#winner").innerHTML = "🚩 Player 1 is win!";
} else if (randomNum1 < randomNum2) {
    document.querySelector("#winner").innerHTML = "Player 2 is win! 🚩";
} else {
    document.querySelector("#winner").innerHTML = "Let's try again!";
}