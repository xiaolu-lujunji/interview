let activeEffect: ReactiveEffect | undefined;

type DepsList = Set<ReactiveEffect>;
type Deps = Map<string | symbol, DepsList>;
const targetToDeps = new WeakMap<object, Deps>();

class ReactiveEffect {
  private effectFn: () => any;

  public constructor(effectFn: () => any) {
    this.effectFn = effectFn;
  }

  public run() {
    this.effectFn();
  }
}

function track(target: object, p: string | symbol) {
  if (activeEffect) {
    let deps = targetToDeps.get(target);
    if (deps === undefined) {
      deps = new Map();
      targetToDeps.set(target, deps);
    }

    let depsList = deps.get(p);
    if (depsList === undefined) {
      depsList = new Set();
      deps.set(p, depsList);
    }

    if (!depsList.has(activeEffect)) {
      depsList.add(activeEffect);
    }
  }
}

function trigger(target: object, p: string | symbol) {
  const deps = targetToDeps.get(target);
  if (deps) {
    const depsList = deps.get(p);
    if (depsList) {
      for (const dep of depsList) {
        dep.run();
      }
    }
  }
}

export function effect(effectFn: () => any) {
  const reactiveEffect = new ReactiveEffect(effectFn);

  activeEffect = reactiveEffect;

  reactiveEffect.run();

  activeEffect = undefined;
}

export function reactive<T extends object>(target: T): T {
  return new Proxy(target, {
    get(target, p, receiver) {
      track(target, p);
      return Reflect.get(target, p, receiver);
    },
    set(target, p, newValue, receiver) {
      const result = Reflect.set(target, p, newValue, receiver);
      trigger(target, p);
      return result;
    },
  });
}

const isObject = (value: any): value is object =>
  typeof value === "object" && value !== null;

class RefImpl<T> {
  private val: T;
  private depsList: DepsList;

  public constructor(value: T) {
    this.val = isObject(value) ? reactive(value) : value;
    this.depsList = new Set();
  }

  public get value() {
    if (activeEffect && !this.depsList.has(activeEffect)) {
      this.depsList.add(activeEffect);
    }

    return this.val;
  }

  public set value(newValue: T) {
    this.val = newValue;

    for (const dep of this.depsList) {
      dep.run();
    }
  }
}

export function ref<T>(value: T) {
  return new RefImpl(value);
}
