describe("1. 经典闭包问题", () => {
  test("var", (done) => {
    for (var a = 0; a < 10; a++) {
      setTimeout(() => console.log(a), 1000);
    }

    // Don't mind this for now :)
    setTimeout(() => done(), 1000);
  });

  test("let", (done) => {
    for (let a = 0; a < 10; a++) {
      setTimeout(() => console.log(a), 1000);
    }

    // Don't mind this for now :)
    setTimeout(() => done(), 1000);
  });
});
