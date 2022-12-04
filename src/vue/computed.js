class ComputedImpl {
  constructor(getter) {
    this.getter = getter
    this.effect = new ReactiveEffect(getter, {
      scheduler: () => {
        this.dirty = true

        for (const dep of this.deps) {
          if (dep.scheduler) {
            dep.scheduler()
          } else {
            dep.run()
          }
        }
      },
    })
    this.deps = new Set()
    this.dirty = true
    this.cachedValue
  }

  get value() {
    if (activeEffect) {
      this.deps.add(activeEffect)
    }

    if (this.dirty) {
      activeEffect = this.effect
      this.cachedValue = this.effect.run()
      this.dirty = false
      activeEffect = undefined
    }

    return this.cachedValue
  }
}

export function computed(getter) {
  const computedImpl = new ComputedImpl(getter)

  return computedImpl
}

let activeEffect

class ReactiveEffect {
  constructor(effectFn, options) {
    this.effectFn = effectFn
    this.scheduler = options.scheduler
  }

  run() {
    return this.effectFn()
  }
}

export function effect(effectFn) {
  const reactiveEffect = new ReactiveEffect(effectFn)

  activeEffect = reactiveEffect

  reactiveEffect.run()

  activeEffect = undefined
}
