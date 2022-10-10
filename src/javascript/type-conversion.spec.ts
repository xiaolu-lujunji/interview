test("1. 输出结果？原因？", () => {
  // https://developer.mozilla.org/en-US/docs/Glossary/Truthy
  if ([]) {
    console.log(1);
  }
  // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
  if ([].length) {
    console.log(2);
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
  // @ts-ignore
  if ({} === {}) {
    console.log(3);
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#comparing_equality_methods
  // @ts-ignore
  if ("" == 0) {
    console.log(4);
  }
});
