/*Runs only when page loads*/
var target = 0;
var numOfRolls = 0;
var dice1 = Math.floor(Math.random() * 6 + 1);
var dice2 = Math.floor(Math.random() * 6 + 1);
document.getElementById("img1").src = "images/die" + dice1 + ".gif";
document.getElementById("img2").src = "images/die" + dice2 + ".gif";

function roll() {
  numOfRolls += 1;
  target = parseInt(document.getElementById("input-box").value);
  dice1 = Math.floor(Math.random() * 6 + 1);
  dice2 = Math.floor(Math.random() * 6 + 1);
  document.getElementById("img1").src = "die" + dice1 + ".gif";
  document.getElementById("img2").src = "die" + dice2 + ".gif";
  document.getElementById("output-box").innerText = "";
  if (dice1 + dice2 == target) {
    document.getElementById("output-box").innerText =
      "You hit your number in " + numOfRolls + " rolls!";
    numOfRolls = 0;
  }
  while (die1 + die2 != target);

  die1URL = `images/die${die1}.gif`;
  imgElem1 = document.querySelector("img");
  imgElm1.setAtttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgElem2 = document.querySelectorAll("img")[1];
  imgElm2.setAtttribute("src", die2URL);
}
