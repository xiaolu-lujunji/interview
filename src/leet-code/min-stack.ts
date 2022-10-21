/**
 * @description 155. 最小栈
 * @see https://leetcode.cn/problems/min-stack/
 * @tag
 */
class MinStack {
  private stack: number[] = [];
  private minValue: number | undefined = undefined;

  constructor() {}

  push(val: number): void {
    if (this.minValue === undefined) {
      this.minValue = val;
      this.stack.push(0);
    } else {
      this.stack.push(val - this.minValue);
      this.minValue = Math.min(this.minValue, val);
    }
  }

  pop(): void {
    const diffValue = this.stack[this.stack.length - 1];
    if (diffValue < 0) {
      this.minValue = this.minValue! - this.stack[this.stack.length - 1];
    }
    this.stack.pop();
    if (this.stack.length === 0) {
      this.minValue = undefined;
    }
  }

  top(): number {
    const topValue = this.stack[this.stack.length - 1];
    if (topValue >= 0) {
      return this.minValue! + topValue;
    } else {
      return this.minValue!;
    }
  }

  getMin(): number {
    return this.minValue!;
  }
}
