/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let arrayNumeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let arraySimbolos = ["&spades;", "&#x2665;", "&#x2663;", "&#x2666;"];
  console.log(random(arraySimbolos));

  let numeroRandom = random(arrayNumeros);
  let simboloRandom = random(arraySimbolos);
  let topSuit = document.querySelector(".top-suit");
  let number = document.querySelector(".number");
  let bottomSuit = document.querySelector(".bottom-suit");

  topSuit.innerHTML = simboloRandom;
  number.innerHTML = numeroRandom;
  bottomSuit.innerHTML = simboloRandom;

  if (simboloRandom === "&#x2665;" || simboloRandom === "&#x2666;") {
    topSuit.classList.add("red");
    bottomSuit.classList.add("red");
  } else {
    topSuit.classList.add("black");
    bottomSuit.classList.add("black");
  }
};

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
