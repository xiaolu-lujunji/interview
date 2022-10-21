import LRUCache from "./LRU-cache";

describe("LRUCache", () => {
  test("用例1", () => {
    const instance = new LRUCache(2);

    instance.put(2, 1);

    instance.put(1, 1);

    instance.put(2, 3);

    instance.put(4, 1);

    // expect(instance.get(1)).toBe(-1);
  });
});
