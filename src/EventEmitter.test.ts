import EventEmitter from "./EventEmitter";

describe("EventEmitter", () => {
  let instance = new EventEmitter();

  beforeEach(() => {
    instance = new EventEmitter();
  });

  describe("on()", () => {
    it("should be called multiple times", () => {
      const handler = jest.fn();
      instance.on("foo", handler);
      instance.emit("foo");
      instance.emit("foo");
      expect(handler).toBeCalledTimes(2);
    });
  });

  describe("once()", () => {
    it("should be called only once", () => {
      const handler = jest.fn();
      instance.once("foo", handler);
      instance.emit("foo");
      instance.emit("foo");
      expect(handler).toBeCalledTimes(1);
    });
  });
});
