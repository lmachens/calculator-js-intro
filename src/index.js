import {
  appendInput /*, addNumberClickEvents */,
  appendElementToElement,
  createDivWithContent,
  clearInput
} from "./lib/input";

let calcInput = document.querySelector(".calc__input");
const calcButtonNumbers = document.querySelectorAll(".calc__button--number");
const operators = document.querySelectorAll(".calc__button--operator");
const equal = document.querySelector(".calc__button--equal");
const calcLog = document.querySelector(".calc__log");

// addNumberClickEvents(calcButtonNumbers, function(text) {
//   appendInput(calcInput, text);
// });

calcButtonNumbers.forEach(function(calcButtonNumber) {
  calcButtonNumber.addEventListener("click", function() {
    appendInput(calcInput, calcButtonNumber.innerText);
  });
});

operators.forEach(function(operator) {
  operator.addEventListener("click", function() {
    appendInput(calcInput, operator.innerHTML);
  });
});

equal.addEventListener("click", () => {
  let result = eval(calcInput.value.toString());
  result = createDivWithContent(result);
  appendElementToElement(calcLog, result);
  clearInput(calcInput);
});
