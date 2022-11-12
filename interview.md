# 1. 自我介绍

4

# 2. 用 Magic Comments 的核心目的是什么？

# 3. 白屏时间和什么有关

# 4. 输入 URL 后发生了什么？下次发起请求会发生什么？

# 5. HTTP/2.0 解决了 HTTP/1.1 的什么问题？

# 6. 你怎么向一个对计算机一无所知的人介绍软件和硬件，不能出现一点专业术语，你能用什么例子来解释？

# 7. 说说你相对于其他人来说有什么优势？

# 8. [1556. 千位分隔数](https://leetcode.cn/problems/thousand-separator/)

# 9. [912. 排序数组](https://leetcode.cn/problems/sort-an-array/)

# 10. React Diff 算法

# 11. [341. 扁平化嵌套列表迭代器](https://leetcode.cn/problems/flatten-nested-list-iterator/)

# 12. ES6 新语法

# 13. [面试题 04.05. 合法二叉搜索树](https://leetcode.cn/problems/legal-binary-search-tree-lcci/)

# 14. JavaScript 在浏览器中的事件循环机制

3

# 15. 同步代码有哪些？宏任务、微任务的产生？

# 16. requestAnimationFrame 是什么任务？

# 17. ES6 中异步的实现

# 18. React 项目中为避免过渡渲染的优化

# 19. JavaScript 原型和原型链

# 20. ES6 和 ES5 继承的区别

# 21. ES6 中静态方法的 this 指向

# 22. 跨域的解决方法、CORS 有关响应头

# 23. no-cache 和 no-store 区别

# 24. 协商缓存过程

# 25. CSRF 概念、形式、防御

# 26. 深拷贝的实现

# 27. 了解哪些网络攻击

# 28. XSS 和 CSRF 攻击区别

# 29. setState 是同步还是异步的？

# 30. HTTP/1.1 HTTP/2.0 HTTP/3.0 之间区别

# 31. [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

3

# 32. 防抖节流区别

# 33. Promise.all 怎么实现

# 34. 箭头函数与普通函数的区别

# 35. 普通函数各种情况下的 this 指向问题

# 36. 扁平化数组手写实现

2

# 37. useCallback & useMemo

# 38. 我学习前端有哪些途径，以及身边同学和朋友做什么技术方向

# 39. 说一下关于 ES6 你知道的，用过的，了解的

# 40. 说一下有哪些是宏任务，有哪些是微任务

# 41. 说一下你对 vuex 的认识

# 42. vuex 中为什么推荐单向数据流？

# 43. 在 mutation 中能做 action 的异步操作吗？vuex 里当数据的改变时是如何让组件知道数据改变了？

# 44. 箭头函数能通过 new 进行实例化吗？

# 45. [15. 三数之和](https://leetcode.cn/problems/3sum/)

# 46. Vue2 和 Vue3 的区别

# 47. Vue3 编译优化

# 48. Vue2 computed 实现原理

# 49. [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)

# 50. [1926. 迷宫中离入口最近的出口](https://leetcode.cn/problems/nearest-exit-from-entrance-in-maze/)

# 51. 实现 curry 函数

# 52. 写一个函数判断数据类型

# 53. this 指向什么？为什么？

```javascript
function foo(){
  return () => this;
}
foo()();
```

# 54. React18 更新的地方

# 55. 副作用是什么，什么不是副作用？

# 56. useEffect 参数

# 57. 如何定义 props 改变了

# 58. 父组件更新，子组件渲染吗，为什么？

# 59. 优化子组件不渲染

# 60. useCallback 写一下用法

# 61. 浏览如何实现切换页面，但没有刷新

# 62. 为什么想做前端

# 63. React 类式组件和函数式组件的区别

# 64. class 在 ES5 和 ES6 以后有什么区别

# 65. `__proto__` 和 prototype 的区别

# 66. React 双缓存树

# 67. 实现 `Promise.allSettled()`

[33. implement `Promise.allSettled()` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-Promise-allSettled)

# 68. 下面这段代码的运行结果：

```javascript
Object.prototype.a = 'object'; 
Function.prototype.a='function'; 
function Person(){}; 
var child = new Person();
console.log(Person.a);
console.log(child.a);
```

# 69. 设计实现 element.js 模块（对虚拟DOM的理解和简单实现）

```typescript
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

# 70. 对 redux 的了解？一个项目只能有一 store 吗？

# 71. 知道 requestAnimationFrame 吗？

# 72. 假设要做无限下拉加载怎么做？
