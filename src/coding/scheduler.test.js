/** JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个。完善下面代码中的 Scheduler 类，使得以下程序能正确输出。
/*  class Scheduler {
/*    add(promiseCreator) { ... }
/*    // ...
/*  }
/* 
/*  const timeout = (time) => new Promise((resolve) => {
/*    setTimeout(resolve, time)
/*  })
/*  const scheduler = new Scheduler()
/*  const addTask = (time, order) => {
/*    scheduler.add(() => timeout(time)).then(() => console.log(order))
/*  }
/*
/*  addTask(1000, '1');
/*  addTask(500, '2');
/*  addTask(300, '3');
/*  addTask(400, '4');
/*  // output: 2 3 1 4
/*  // 一开始，1、2两个任务进入队列
/*  // 500ms 时，2完成，输出2，任务3进队
/*  // 800ms 时，3完成，输出3，任务3进队
/*  // 1000ms 时，1完成，输出1
*/

class Scheduler {
  inProgress = 0
  tasks = []
  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      const task = () => {
        const promise = promiseCreator()
        promise
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.inProgress--
            this.next()
          })
      }
      this.tasks.push(task)
      this.next()
    })
  }

  next() {
    if (this.tasks.length > 0 && this.inProgress < 2) {
      const task = this.tasks.shift()
      this.inProgress++
      task()
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

describe('Scheduler', () => {
  let addTask
  let orders

  beforeEach(() => {
    const scheduler = new Scheduler()

    orders = []
    addTask = (time, order) => {
      scheduler
        .add(() => timeout(time))
        .then(() => {
          orders.push(order)
        })
    }
  })

  test('测试用例 1', async () => {
    addTask(1000, 1)
    addTask(500, 2)
    addTask(300, 3)
    addTask(400, 4)

    await timeout(2000)

    expect(orders).toEqual([2, 3, 1, 4])
  })

  test('测试用例 2', async () => {
    addTask(400, 4)
    addTask(200, 2)
    addTask(300, 3)
    addTask(200, 1)

    await timeout(1000)

    expect(orders).toEqual([2, 4, 3, 1])
  })
})
