"use strict";

import { sum, sub, multiply, divide, countDigits } from "./lib/operators";

const firstInput = document.querySelector("[name=first]");
const secondInput = document.querySelector("[name=second]");
const sumButton = document.querySelector(".sum");
const subButton = document.querySelector(".sub");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const result = document.querySelector("#result");

function getInput() {
  const firstNumber = parseInt(firstInput.value);
  const secondNumber = parseInt(secondInput.value);

  return {
    first: firstNumber,
    second: secondNumber
  };
}

sumButton.addEventListener("click", function() {
  const numbers = getInput();
  const sumResult = sum(numbers.first, numbers.second);
  const digits = countDigits(sumResult);
  result.innerHTML = sumResult + " " + digits;
});

subButton.addEventListener("click", function() {
  const numbers = getInput();
  result.innerHTML = sub(numbers.first, numbers.second);
});

multiplyButton.addEventListener("click", function() {
  const numbers = getInput();
  result.innerHTML = multiply(numbers.first, numbers.second);
});

divideButton.addEventListener("click", function() {
  const numbers = getInput();
  result.innerHTML = divide(numbers.first, numbers.second);
});
