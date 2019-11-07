import { appendInput /*, addNumberClickEvents */ } from "./lib/input";

const calcInput = document.querySelector(".calc__input");
const calcButtonNumbers = document.querySelectorAll(".calc__button--number");

// addNumberClickEvents(calcButtonNumbers, function(text) {
//   appendInput(calcInput, text);
// });

calcButtonNumbers.forEach(function(calcButtonNumber) {
  calcButtonNumber.addEventListener("click", function() {
    appendInput(calcInput, calcButtonNumber.innerText);
  });
});
