import { effect, reactive, ref } from "./reactivity";

describe("reactive", () => {
  it("should return a new object", () => {
    const original = { count: 0 };
    const observed = reactive(original);

    expect(original).not.toBe(observed);
  });

  it("should be reactive", () => {
    const original = { count: 0 };
    const observed = reactive(original);

    let count = 0;
    effect(() => {
      count = observed.count;
    });

    observed.count++;
    expect(count).toBe(observed.count);

    observed.count++;
    expect(count).toBe(observed.count);

    expect(original.count).toBe(0);
    expect(count).toBe(2);
  });
});

describe("ref", () => {
  it("should be reactive", () => {
    const count = ref(1);

    let expectedCount: number = 0;
    effect(() => {
      expectedCount = count.value;
    });

    count.value++;
    expect(expectedCount).toBe(2);

    count.value = 5;
    expect(expectedCount).toBe(5);
  });
});
