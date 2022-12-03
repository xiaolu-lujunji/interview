function LazyMan(name, logFn) {
  const tasks = [];

  const createTask = (msg, wait) => {
    return () =>
      new Promise((resolve) => {
        if (wait === undefined) {
          resolve(msg);
        } else {
          setTimeout(() => {
            resolve(msg);
          }, wait * 1000);
        }
      });
  };

  Promise.resolve().then(async () => {
    for (const task of tasks) {
      logFn(await task());
    }
  });

  tasks.push(createTask(`Hi, I'm ${name}.`));

  const wakeUpMessage = (wait) =>
    `Wake up after ${wait} ${wait > 1 ? "seconds" : "second"}.`;

  return {
    eat(food) {
      tasks.push(createTask(`Eat ${food}.`));
      return this;
    },
    sleep(wait) {
      tasks.push(createTask(wakeUpMessage(wait), wait));
      return this;
    },
    sleepFirst(wait) {
      tasks.unshift(createTask(wakeUpMessage(wait), wait));
      return this;
    },
  };
}

describe("lazyMan", () => {
  test("测试用例 1", (done) => {
    const log = (str) => {
      log.logs.push(str);
    };
    log.logs = [];

    LazyMan("Jack", log)
      .eat("banana")
      .eat("apple")
      .sleepFirst(1)
      .eat("egg")
      .sleepFirst(1);
    setTimeout(() => {
      expect(log.logs.slice()).toEqual([]);
    }, 0);

    setTimeout(() => {
      expect(log.logs.slice()).toEqual(["Wake up after 1 second."]);
    }, 1500);
    setTimeout(() => {
      expect(log.logs.slice()).toEqual([
        "Wake up after 1 second.",
        "Wake up after 1 second.",
        "Hi, I'm Jack.",
        "Eat banana.",
        "Eat apple.",
        "Eat egg.",
      ]);
      done();
    }, 2500);
  });
});
