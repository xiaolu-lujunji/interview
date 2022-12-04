- [x] [`lazyMan()`](https://bigfrontend.dev/problem/create-lazyman)
- [x] [`Scheduler`](../src/coding/scheduler.test.js)
- [x] [变色龙问题](https://www.nowcoder.com/questionTerminal/7f0379b9f8f44bd3a2bc51ed92642b23?orderByHotValue=1&mutiTagIds=764&page=1&onlyReference=false)

- [x] [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)

- [ ] `opacity: 0;` vs `visibility: hidden;` vs `display: none;`

可访问性

`visibility: hidden;` 和 `display: none;` 都会使元素不可访问。而 `opacity: 0;` 的元素仍然可访问。

布局

`display: none;` 将不再占有空间，会影响布局。而其它两者不会。

事件

`opacity: 0;` 不会影响元素的事件，而其余两者会。

- [x] 有一个不均匀硬币，如何才能公平对决
- [x] 如下代码输出是什么

```javascript
var a = 10
;(function () {
  var a
  console.log(window.a)
  console.log(a)
  a = 20
  console.log(a)
})()

var b = {
  a,
  c: b,
}
```

- [ ] 图片懒加载
- [ ] TCP 的可靠传输是如何实现的

通过序列号与确认应答提高可靠性

- [x] [防抖](https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option)
- [x] [695. 岛屿的最大面积](https://leetcode.cn/problems/max-area-of-island/)
- [x] `typeof` vs `Object.prototype.toString.call()`

- [x] 如何判断基本数据类型

```javascript
value === null || typeof value !== 'object'
```

- [x] 基本数据类型
- [x] `debounce()`
- [x] `throttle()`
- [x] [54. 螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/)
- [x] [155. 最小栈](https://leetcode.cn/problems/min-stack/)
- [x] `httpOnly` 是什么？怎么用？为什么要用？
- [x] cookie 的属性有哪些