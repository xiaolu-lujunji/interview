import { computed, effect, reactive, ref } from "./reactivity";

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

describe("computed", () => {
  it("happy path", () => {
    const value = reactive({
      foo: 1,
    });

    const getter = computed(() => {
      return value.foo;
    });

    value.foo = 2;
    expect(getter.value).toBe(2);
  });

  it("should compute lazily", () => {
    const value = reactive({
      foo: 1,
    });
    const getter = jest.fn(() => {
      return value.foo;
    });
    const cValue = computed(getter);

    // lazy
    expect(getter).not.toHaveBeenCalled();

    expect(cValue.value).toBe(1);
    expect(getter).toHaveBeenCalledTimes(1);

    // should not compute again
    cValue.value;
    expect(getter).toHaveBeenCalledTimes(1);

    // should not compute until needed
    value.foo = 2;
    expect(getter).toHaveBeenCalledTimes(1);

    // now it should compute
    expect(cValue.value).toBe(2);
    expect(getter).toHaveBeenCalledTimes(2);

    // should not compute again
    cValue.value;
    expect(getter).toHaveBeenCalledTimes(2);
  });
});
