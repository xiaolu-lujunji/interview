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

  - 事件回调
  - `setTimeout()` 安排的回调
  - `setInterval()` 安排的回调
  - Node.js 中 `setImmediate()` 安排的回调

  微任务

  - `Promise.prototype.then()`、`Promise.prototype.catch()`、`Promise.prototype.finally()` 安排的回调
  - `queueMicroTask()` 安排的回调

- [x] [实现 `curry()`](https://bigfrontend.dev/problem/implement-curry-with-placeholder)

- [x] 输出是什么

  ```javascript
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i + '');
    });
  }
  ```

- [x] [你知道 Vue 的响应式原理吗？](https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue)

- [x] [Vue 双向绑定原理](https://vuejs.org/guide/components/events.html#usage-with-v-model)

- [ ] 你认为 virtual DOM 存在的意义是什么？

- [ ] CommonJS 的特性

- [ ] 进程和线程区别是什么

- [ ] Webpack 和 Vite 的区别

- [x] [414. 第三大的数](https://leetcode.cn/problems/third-maximum-number/)

- [x] 输出是什么（非严格模式）

  ```javascript
  window.name = 'byteDance';
  function A() {
    this.name = '123';
  }
  A.prototype.getA = function () {
    console.log(this);
    return this.name + '1';
  };
  const a = new A();
  const getA = a.getA;
  getA();
  ```

- [x] `<script>` 元素的 `defer` 和 `async` 属性

  - `async` : 如果 `<script>` 元素存在 `async` 属性，那么脚本将在 HTML 文档解析的同时被获取（**脚本的获取**不会阻塞 HTML 文档的解析），并在其可用时被评估。
  - `defer` : 如果 `<script>` 元素存在 `defer` 属性，那么脚本将在 HTML 文档被解析后，`DOMContentLoaded` 事件被触发前执行。（**脚本的执行**不会阻塞 HTML 文档的解析，但阻塞 `DOMContentLoaded` 事件的触发）

- [x] [write your own `instanceof`](https://bigfrontend.dev/problem/write-your-own-instanceof)
