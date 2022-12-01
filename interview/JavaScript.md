- [x] 原始类型有哪些？

- [x] `==` 与 `===` 的区别

- [x] 请说明下面代码涉及的类型转换

```javascript
[0] == ''
[0] == 0
```

- [x] 下面的代码输出是什么？

```javascript
const obj = {
    name: 'yy',
    getInfo() {
        return {
            name: 'll',
            getName() {
                console.log(this.name)
            }
        }
    }
}
obj.getInfo().getName()
```

- [x] 如何让上述代码输出 `"yy"`

- [ ] 除了 `call()`、`apply()`、箭头函数，你还有其他方法吗？

- [x] 手写 `Promise.prototype.all()`

- [ ] CommonJS 和 ES modules 的区别

- [ ] tree shaking 具体实现

- [ ] ES6 有什么新增的东西

- [ ] 实现 `getElementById(rootNode, id)`

- [ ] 实现由并发限制的 Promise 请求

- [ ] 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个。完善代码中的 Scheduler 类，使得一下程序能正确输出。

```javascript
class Scheduler {
    constructor() {
        this.tasks = [], // 待运行的任务
        this.usingTask = [] // 正在运行的任务
    }
    // promiseCreator 是一个异步函数，return Promise
    add(promiseCreator) {
        
    }
    usingRun(promiseCreator) {
        
    }
}
const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => console.log(order))
}
addTask(400, 4)
addTask(200, 2)
addTask(300, 3)
addTask(100, 1)
// 2, 4, 3, 1
```

