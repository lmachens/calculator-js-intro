import { sum, countDigits } from "./operators";

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
test("adds 1 + 2 to equal 3", function() {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("adds (-1) + (-2) to equal -3", function() {
  const result = sum(-1, -2);
  expect(result).toBe(-3);
});

test("adds 0 + 0 to equal 0", function() {
  const result = sum(0, 0);
  expect(result).toBe(0);
});

test("count digits of 213", function() {
  const result = countDigits(213);
  expect(result).toBe(3);
});

test("count digits of 3129823", function() {
  const result = countDigits(3129823);
  expect(result).toBe(7);
});

test("count digits of -231", function() {
  const result = countDigits(-231);
  expect(result).toBe(4);
});

test("count digits of 0", function() {
  const result = countDigits(0);
  expect(result).toBe(1);
});
