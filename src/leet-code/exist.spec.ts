import exist from "./exist";

describe("exist", () => {
  test("用例67", () => {
    expect(
      exist(
        [
          ["a", "b"],
          ["c", "d"],
        ],
        "acdb"
      )
    ).toBe(true);
  });
});
