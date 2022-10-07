import _instanceof from "./instanceof";

test("_instanceof", () => {
  expect(_instanceof({}, Object)).toBe(true);
});
