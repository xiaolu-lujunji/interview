- [x] 原始类型有哪些？

- [x] `==` 与 `===` 的区别

- [x] 请说明下面代码涉及的类型转换

```javascript
([0] == ""[0]) == 0;
```

- [x] 下面的代码输出是什么？

```javascript
const obj = {
  name: "yy",
  getInfo() {
    return {
      name: "ll",
      getName() {
        console.log(this.name);
      },
    };
  },
};
obj.getInfo().getName();
```

- [x] 如何让上述代码输出 `"yy"`
- [ ] 除了 `call()`、`apply()`、箭头函数，你还有其他方法吗？
- [x] 手写 `Promise.prototype.all()`
- [ ] CommonJS 和 ES modules 的区别
- [ ] tree shaking 具体实现
- [ ] ES6 有什么新增的东西
- [ ] 实现 `getElementById(rootNode, id)`
- [ ] 实现由并发限制的 Promise 请求

# 二面

- [ ] [带并发限制的异步调度器 Scheduler](../src/coding/scheduler.test.ts)
- [ ] [手写发布订阅](../src/coding/event-emitter.test.ts)

