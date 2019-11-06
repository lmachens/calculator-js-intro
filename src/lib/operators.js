export function sum(first, second) {
  return first + second;
}

export function sub(first, second) {
  return first - second;
}

export function multiply(first, second) {
  return first * second;
}

export function divide(first, second) {
  return first / second;
}

// export function countDigits(number) {
//   let count = 0;
//   if (number < 0) {
//     number = number * -1; // equal to number *= -1
//     count = count + 1; // equal to ++count or count++
//   }
//   if (number >= 0) {
//     count = count + 1; // equal to ++count or count++
//   }

//   while (number / 10 >= 1) {
//     number = number / 10; // equal to number /= 10
//     count = count + 1; // equal to ++count or count++
//   }

//   return count;
// }

export function countDigits(number) {
  return number.toString().length;
}
