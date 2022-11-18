const ONCE_FLAG = "__eventEmitter_once";

export default class EventEmitter {
  private nameToHandlers: Map<string, Array<(...args: any[]) => any>>;

  public constructor() {
    this.nameToHandlers = new Map();
  }

  public on(type: string, handler: (...args: any[]) => any) {
    const handlers = this.nameToHandlers.get(type);

    if (handlers) {
      handlers.push(handler);
    } else {
      this.nameToHandlers.set(type, [handler]);
    }
  }

  public once(type: string, handler: (...args: any[]) => any) {
    Object.defineProperty(handler, ONCE_FLAG, {
      value: true,
      configurable: true,
      writable: false,
      enumerable: false,
    });
    this.on(type, handler);
  }

  public off(type: string, handler?: (...args: any[]) => any) {
    const handlers = this.nameToHandlers.get(type);
    if (handlers) {
      if (handler) {
        const handlerIndex = handlers.findIndex(handler);
        if (handlerIndex !== -1) {
          handlers.splice(handlerIndex, 1);
        }
      } else {
        this.nameToHandlers.set(type, []);
      }
    }
  }

  public emit(type: string, ...args: any[]) {
    let handlers = this.nameToHandlers.get(type);

    if (handlers) {
      handlers.forEach((handler) => {
        handler(...args);
      });
      this.nameToHandlers.set(
        type,
        // @ts-ignore
        handlers.filter((handler) => !handler[ONCE_FLAG])
      );
    }

    handlers = this.nameToHandlers.get("*");
    if (handlers) {
      handlers.forEach((handler) => {
        handler(type, ...args);
      });
      this.nameToHandlers.set(
        "*",
        // @ts-ignore
        handlers.filter((handler) => !handler[ONCE_FLAG])
      );
    }
  }
}
