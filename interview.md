1. 自我介绍

11

2. 用 Magic Comments 的核心目的是什么？
3. 白屏时间和什么有关
4. 输入 URL 后发生了什么？下次发起请求会发生什么？

3

5. HTTP/2.0 解决了 HTTP/1.1 的什么问题？
6. 你怎么向一个对计算机一无所知的人介绍软件和硬件，不能出现一点专业术语，你能用什么例子来解释？
7. 说说你相对于其他人来说有什么优势？
8. [1556. 千位分隔数](https://leetcode.cn/problems/thousand-separator/)
9. [912. 排序数组](https://leetcode.cn/problems/sort-an-array/)
10. React Diff 算法
11. [341. 扁平化嵌套列表迭代器](https://leetcode.cn/problems/flatten-nested-list-iterator/)
12. ES6 新语法
13. [面试题 04.05. 合法二叉搜索树](https://leetcode.cn/problems/legal-binary-search-tree-lcci/)
14. JavaScript 在浏览器中的事件循环机制

6

15. 同步代码有哪些？宏任务、微任务的举例？

4

16. requestAnimationFrame 是什么任务？
17. ES6 中异步的实现
18. React 项目中为避免过渡渲染的优化
19. JavaScript 原型和原型链

2

20. ES6 和 ES5 继承的区别

21. ES6 中静态方法的 this 指向

22. 跨域的解决方法、CORS 有关响应头

23. no-cache 和 no-store 区别

24. 协商缓存过程

25. CSRF 概念、形式、防御

26. 了解哪些网络攻击

27. XSS 和 CSRF 攻击区别

28. setState 是同步还是异步的？

29. HTTP/1.1 HTTP/2.0 HTTP/3.0 之间区别

2

31. [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

5

32. 防抖节流区别
33. useCallback & useMemo
34. 我学习前端有哪些途径，以及身边同学和朋友做什么技术方向
35. 说一下关于 ES6 你知道的，用过的，了解的
36. 说一下你对 vuex 的认识
37. vuex 中为什么推荐单向数据流？
38. 在 mutation 中能做 action 的异步操作吗？vuex 里当数据的改变时是如何让组件知道数据改变了？
39. 箭头函数能通过 new 进行实例化吗？
40. [15. 三数之和](https://leetcode.cn/problems/3sum/)
41. Vue2 和 Vue3 的区别
42. Vue3 编译优化
43. Vue2 computed 实现原理
44. [215. 数组中的第 K 个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
45. [1926. 迷宫中离入口最近的出口](https://leetcode.cn/problems/nearest-exit-from-entrance-in-maze/)
46. 实现 curry 函数
48. this 指向什么？为什么？

```javascript
function foo() {
  return () => this;
}
foo()();
```

54. React18 更新的地方
55. 副作用是什么，什么不是副作用？
56. useEffect 参数
57. 如何定义 props 改变了
58. 父组件更新，子组件渲染吗，为什么？
59. 优化子组件不渲染
60. useCallback 写一下用法
61. 浏览如何实现切换页面，但没有刷新
62. 为什么想做前端

2

63. React 类式组件和函数式组件的区别
64. class 在 ES5 和 ES6 以后有什么区别
65. `__proto__` 和 prototype 的区别
66. React 双缓存树
67. 实现 `Promise.allSettled()`

[33. implement `Promise.allSettled()` | BFE.dev - prepare for Front-End job interviews.](https://bigfrontend.dev/problem/implement-Promise-allSettled)

68. 下面这段代码的运行结果：

```javascript
Object.prototype.a = "object";
Function.prototype.a = "function";
function Person() {}
var child = new Person();
console.log(Person.a);
console.log(child.a);
```

69. 设计实现 element.js 模块（对虚拟 DOM 的理解和简单实现）

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

70. 对 redux 的了解？一个项目只能有一 store 吗？

71. 知道 requestAnimationFrame 吗？

72. 假设要做无限下拉加载怎么做？

73. 说一下如何拦截对 JavaScript 对象的属性的修改

74. Css 中 property 和 attribute 的具体区别

75. Vue 如何解析 template 模板标签的代码？如何被编译的，最后被编译成什么

76. Vue 中的 key 是干什么的

77. script 标签的 defer 和 async 属性

78. 说一下 proxy

79. 说一下跨域的解决方案

2

79. 实现节流按钮组件

80. 手写 instanceof

81. 表单解决方案，**jsonSchema** 协议

82. 前端测网速，一个请求从发送到接受经历了一些步骤，怎么更精准

83. 用过哪些 hooks

84. redux 有哪些 hooks

85. react 有哪些自带的 hooks

86. js 的隐式转换？举个栗子说一下

87. js 作用域

88. css 盒模型

2

89. 怎么设置全局变量
90. 怎么实现 react 组件初次渲染时执行一些事件
91. html 的 meta 标签是干嘛的
92. 如何纯 css 实现一个从左到右移动的动画，js 呢？
93. js 执行会阻塞渲染吗？如何避免渲染被打断？
94. script 标签有哪些属性，干什么用的
95. 手撕题 1：两栏布局，顺便问了下 flex：1 的意思，还有 flex 有哪些属性
96. 两数之和

[1. 两数之和](https://leetcode.cn/problems/two-sum/)

97. 问答题：说一下结果

```javascript
window.name = "byteDance";
function A() {
  this.name = "123";
}
A.prototype.getA = function () {
  console.log(this);
  return this.name + "1";
};
const a = new A();
const getA = a.getA;
getA();
```

98. js 里有哪些改变 this 指向的方法

100. 合并两个有序数组

[88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)

101. webpack 原理
102. React 里面直接将内容设置到 DOM 上的方法
103. cookie 的 http-only 和 same-site，cookie 怎么设置只在 https 时携带
104. cookie 和 session 的区别
105. 最长回文子序列

[516. 最长回文子序列](https://leetcode.cn/problems/longest-palindromic-subsequence/)

106. https 的连接过程

107. 介绍前端常用设计模式，实现一个观察者模式

108. 强缓存和协商缓存的差别

109. 'a'.toUpperCase()这行代码执行时发生了什么？new 一个新对象的时候，你觉得发生了什么？

110. 你是如何理解 async、await 的？

111. 搜索二维矩阵 ll
     [240. 搜索二维矩阵 II](https://leetcode.cn/problems/search-a-2d-matrix-ii/)

112. http、https 有什么区别？非对称加密算法了解吗（因为提到了非对称加密）？你知道 http 状态码有哪些吗？
     
     3

113. 你认为 virtual DOM 存在的意义是什么？

114. 浏览器的缓存机制了解吗？前端发送请求时能否设置缓存机制类型？

115. 你知道浏览器的哪些存储数据的方式？

116. 了解 session 吗？在前端与服务器进行数据传输时，它跟 cookie 之间有什么互动吗？

117. 你知道 Vue 的响应式原理吗？

118. ES6、ES7 等是什么意思？看过 ECMAScript 标准的文档吗？

119. tcp 与 udp 区别

120. osi 七层

121. cookie sessionstorage localstorage

122. vue的双向绑定实现

124. 怎么用promise实现async和await

125. 你能给我讲一下什么是微服务吗？
     
     将一个系统按业务划分成多个子系统，每个子系统都是完整的，可独立运行的，子系统间的交互可通过HTTP协议进行通信，也可以采用消息队列来通信，然后说了一下在实习方面自己对微服务的见解。你刚才说的是编码的微服务，有没有考虑过在部署上的微服务是什么呢？本人没有部署过，这个问题是面试官讲了很多，我加了一些自己的想法和理解进去。那你说一下微服务的优缺点有什么呢？简化部署，可扩展，错误隔离，缺点就是复杂度高，运营成本高。说一下微服务的一个实际问题，A调用B，B调用C，最后C调用A，类似死锁但是微服务中是资源需求高，这个怎么解决？个人出发优化微服务通信方式，讲了讲RPC，REST，Message，讲了讲Message应该是最优解，解耦什么的挺好，除了单独一个消息服务，然后面试官说了说，请求的时候带一个日志标识，后续在上线之前也可以有一个流程测试，这部分比较深聊了一会。

126. 第三大的数
     
     [414. 第三大的数](https://leetcode.cn/problems/third-maximum-number/)

127. webpack和vite的区别

128. 进程和线程区别是什么

129. 堆栈是什么

130. BFC

131. 输出是什么
     
     ```javascript
     for(let i = 0; i < 5; ++i) {
       setTimeout(function(){
         console.log(i + '');
       })
     }
     ```

132. vue组件间的通信有哪些方式，有用过的有哪些

133. commonJS的特性
