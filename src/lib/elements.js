export function createDivWithContent(content) {
  const divElement = document.createElement("div");
  // divElement.innerHTML = content;
  const elementContent = document.createTextNode(content);
  divElement.appendChild(elementContent);

  return divElement;
}

export function appendElementToElement(parent, child) {
  // see https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
  parent.appendChild(child);
}
