# interview

My preparation for improving front-end interview skills.

- [x] [解释一下 `this` 在 JavaScript 中是如何工作的](https://www.greatfrontend.com/questions/quiz/javascript/explain-how-this-works-in-javascript)

- [x] [解释一下箭头函数和普通函数的区别](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [x] [实现 Promise.all()](https://www.greatfrontend.com/questions/javascript/promise-all)

- [x] [实现 cloneDeep()](https://bigfrontend.dev/problem/create-cloneDeep)

- [x] [实现 debounce()](https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option)

- [x] [实现 EventEmitter](https://bigfrontend.dev/problem/create-an-Event-Emitter)

- [x] [实现 detectType()](https://bigfrontend.dev/problem/detect-data-type-in-JavaScript)

- [x] [实现 Array.prototype.flat()](https://bigfrontend.dev/problem/implement-Array-prototype.flat)

- [x] [用 ES5 语法实现继承](https://bigfrontend.dev/problem/write-your-own-extends-in-es5)

- [ ] [What is XSS? How to prevent it?](https://bigfrontend.dev/question/What-is-XSS-How-to-prevent-it)

- [ ] [What is CSRF? How to prevent it?](https://bigfrontend.dev/question/What-is-CSRF-How-to-prevent-it)

- [ ] [Explain the differences between AMD, CommonJS and ES modules](https://bigfrontend.dev/question/Explain-the-differences-between-AMD-CommonJS-and-ES-modules)

- [x] [Explain Event Loop in Node.js](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

- [x] 说一下有哪些是宏任务，有哪些是微任务

  宏任务

  - `script` 标签中的代码
  - 事件回调
  - `setTimeout()` 安排的回调
  - `setInterval()` 安排的回调
  - Node.js 中 `setImmediate()` 安排的回调

  微任务

  - `Promise.prototype.then()`、`Promise.prototype.catch()`、`Promise.prototype.finally()` 安排的回调
  - `queueMicroTask()` 安排的回调
  - Node.js 中 `process.nextTick()` 安排的回调

