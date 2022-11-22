/**
 * @description 215. 数组中的第K个最大元素
 * @see https://leetcode.cn/problems/kth-largest-element-in-an-array/
 * @tag 基于快速排序的选择方法
 */
export default function findKthLargest(nums: number[], k: number): number {
  const swap = (numbers: number[], index1: number, index2: number) => {
    const temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
  };

  const partition = (numbers: number[], start: number, end: number) => {
    const pivot = numbers[Math.floor(end - start + 1) + start];
    let l = start - 1;
    let r = end + 1;
    let i = start;
    while (i < r) {
      if (numbers[i] === pivot) {
        i++;
      } else if (numbers[i] < pivot) {
        swap(numbers, ++l, i++);
      } else {
        swap(numbers, --r, i);
      }
    }
    return [l, r];
  };

  const index = nums.length - k;
  let start = 0;
  let end = nums.length - 1;
  while (true) {
    const [l, r] = partition(nums, start, end);
    if (index <= l) {
      end = l;
    } else if (index >= r) {
      start = r;
    } else {
      return nums[index];
    }
  }
}
