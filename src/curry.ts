function curry<T extends (...args: any[]) => any>(fn: T) {
  function curried(this: any, ...args1: any[]) {
    if (args1.length >= fn.length) return fn.apply(this, args1)

    return function (this: any, ...args2: any[]) {
      return curried.call(this, ...args1, ...args2)
    }
  }

  return curried
}

export default curry
