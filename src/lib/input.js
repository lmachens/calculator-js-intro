export function appendInput(element, value) {
  element.value = element.value + value;
}
export function createDivWithContent(content) {
  const element = document.createElement("div");
  element.innerHTML = content;
  return element;
}
export function appendElementToElement(parent, child) {
  parent.appendChild(child);
}

export function addNumberClickEvents(numberElements, onClick) {
  numberElements.forEach(function(numberElement) {
    numberElement.addEventListener("click", function() {
      onClick(numberElement.innerText);
    });
  });
}

export function clearInput(input) {
  input.value = "";
}
