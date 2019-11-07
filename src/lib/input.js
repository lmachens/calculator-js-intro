export function appendInput(element, value) {
  element.value = element.value + value;
}

export function addNumberClickEvents(numberElements, onClick) {
  numberElements.forEach(function(numberElement) {
    numberElement.addEventListener("click", function() {
      onClick(numberElement.innerText);
    });
  });
}
