import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//funcion random number
const randomNumber = arr => {
  return Math.floor(Math.random() * arr.length);
};

//funcion para extraer valores arrays
const getRandomValue = arr => {
  return arr[randomNumber(arr)];
};

//funcion concatenar
const generateExcuse = () => {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  // 4. retornar
  return `${getRandomValue(who)} ${getRandomValue(action)} ${getRandomValue(what)} ${getRandomValue(when)}.`;
};

console.log(generateExcuse());