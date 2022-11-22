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

  - DOM 事件回调
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

- [x] `<script>` 元素的 `async` 和 `defer` 属性

  - `async` : 如果 `<script>` 元素存在 `async` 属性，那么脚本将在 HTML 文档解析的同时被获取（**脚本的获取**不会阻塞 HTML 文档的解析），并在其可用时被评估。
  - `defer` : 如果 `<script>` 元素存在 `defer` 属性，那么脚本将在 HTML 文档被解析后，`DOMContentLoaded` 事件被触发前执行。（**脚本的执行**不会阻塞 HTML 文档的解析，但阻塞 `DOMContentLoaded` 事件的触发）

- [x] [write your own `instanceof`](https://bigfrontend.dev/problem/write-your-own-instanceof)

- [x] [implement `Promise.allSettled()`](https://bigfrontend.dev/problem/implement-Promise-allSettled)

- [x] [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

- [x] 输出是什么

  ```javascript
  Object.prototype.a = "object";
  Function.prototype.a = "function";
  function Person() {}
  var child = new Person();
  console.log(Person.a);
  console.log(child.a);
  ```

- [x] [你知道 Vue computed 原理吗？](./src/reactivity.ts)

- [x] [516. 最长回文子序列](https://leetcode.cn/problems/longest-palindromic-subsequence/)

- [x] [1. 两数之和](https://leetcode.cn/problems/two-sum/)

- [x] [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)

- [x] [1556. 千位分隔数](https://leetcode.cn/problems/thousand-separator/)

- [x] [912. 排序数组](https://leetcode.cn/problems/sort-an-array/)

- [ ] 实现 `el()` 函数

  ```javascript
  test("element", () => {
    const ul = el("ul", { id: "list" }, [
      el("li", { class: "item" }, ["Item 1"]),
      el("li", { class: "item" }, ["Item 2"]),
      el("li", { class: "item" }, ["Item 3"]),
    ]);
  
    const ulRoot = ul.render();
    document.body.appendChild(ulRoot);
  
    expect(document.body.innerHTML).toBe(
      '<ul id="list"><li class="item">Item 1</li><li class="item">Item 2</li><li class="item">Item 3</li></ul>'
    );
  });
  ```

- [x] [15. 三数之和](https://leetcode.cn/problems/3sum/)

- [x] [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)

- [x] [341. 扁平化嵌套列表迭代器](https://leetcode.cn/problems/flatten-nested-list-iterator/)

- [x] this 的指向是什么？为什么？

  ```javascript
  function foo() {
    return () => this;
  }
  foo()();
  ```

- [x] [面试题 04.05. 合法二叉搜索树](https://leetcode.cn/problems/legal-binary-search-tree-lcci/)

