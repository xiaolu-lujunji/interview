import isObject from "lodash/isObject";
import isFunction from "lodash/isFunction";
import asap from "asap";

class MyPromise<T> {
  private state: "PENDING" | "FULFILLED" | "REJECTED" = "PENDING";
  private result: T | undefined = undefined;
  private subscribers: any[] = [];

  public constructor(
    executor: (
      resolve: (value: T) => void,
      reject: (reason: any) => void
    ) => void
  ) {
    const resolve = (value: T) => {
      if (value instanceof MyPromise) {
        switch (value.state) {
          case "FULFILLED":
            this.fulfill(value.result);
            break;
          case "REJECTED":
            this.reject(value.result);
          default:
            break;
        }
      } else {
        this.fulfill(value);
      }
    };

    const reject = (reason: any) => {
      if (this.state === "PENDING") {
        this.state = "REJECTED";
        this.result = reason;

        asap(() => {
          publishRejection(this);
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  private fulfill(value: T) {
    if (this.state === "PENDING") {
      this.result = value;
      this.state = "FULFILLED";

      if (this.subscribers.length !== 0) {
        asap(() => {
          asap(() => {
            publish(this);
          });
        });
      }
    }
  }

  private reject(reason: any) {}

  private subscribe<U extends any>(
    parent: MyPromise<T>,
    child: MyPromise<U>,
    onFulfillment,
    onRejection
  ) {
    if (parent.subscribers.length === 0 && parent.state !== "PENDING") {
      asap(() => {
        publish(parent);
      });
    }

    parent.subscribers.push(child);
    parent.subscribers.push(onFulfillment);
    parent.subscribers.push(onRejection);
  }

  public then(onFulfillment, onRejection) {}
}

export default MyPromise;
