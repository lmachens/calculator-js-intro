import { sum } from "./operators";

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
