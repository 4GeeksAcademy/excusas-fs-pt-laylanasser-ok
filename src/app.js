import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
// datos ejercicio
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// función 
const randomNumber = arr => {
  return Math.floor(Math.random() * arr.length);
};

window.onload = function () {
  const excuse = `${who[randomNumber(who)]} ${action[randomNumber(action)]} ${what[randomNumber(what)]} ${when[randomNumber(when)]}.`;
  document.getElementById("excuse").innerHTML = excuse;
  console.log(excuse);
};