class EventEmitter {
  private eventToHandlers: Map<string, (() => void)[]>;

  constructor() {
    this.eventToHandlers = new Map();
  }

  on(event: string, handler: () => void) {
    const handlers = this.eventToHandlers.get(event);
    if (handlers) {
      handlers.push(handler);
    } else {
      this.eventToHandlers.set(event, [handler]);
    }
  }

  off(event: string, handler?: () => void) {
    const handlers = this.eventToHandlers.get(event);
    if (handlers) {
      if (handler) {
        const targetIndex = handlers.findIndex(handler);
        if (targetIndex !== -1) {
          handlers.splice(targetIndex, 1);
        }
      } else {
        this.eventToHandlers.set(event, []);
      }
    }
  }

  emit(event: string) {
    const handles = this.eventToHandlers.get(event);
    if (handles) {
      for (const handler of handles) {
        handler();
      }
    }
  }
}
