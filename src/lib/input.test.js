import { appendInput } from "./input";

test("append 231 to 000 in input", () => {
  const inputElement = document.createElement("input");
  inputElement.value = "000";

  appendInput(inputElement, "111");

  expect(inputElement.value).toBe("000111");
});
