/**
 * @source [215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
 * @tag 基于快速排序的选择方法
 */
export default function findKthLargest(nums: number[], k: number): number {
  const swap = (index1: number, index2: number) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };

  const partition = (left: number, right: number) => {
    const pivotIndex = Math.trunc(Math.random() * (right - left + 1)) + left;
    const pivot = nums[pivotIndex];
    let i = left - 1;
    let j = right + 1;
    let k = left;
    while (k < j) {
      if (nums[k] === pivot) {
        k++;
      } else if (nums[k] < pivot) {
        swap(++i, k++);
      } else {
        swap(--j, k);
      }
    }
    return k - 1;
  };

  let left = 0;
  let right = nums.length - 1;
  const targetIndex = nums.length - k;
  while (true) {
    const pivotIndex = partition(left, right);
    if (pivotIndex === targetIndex) {
      return nums[pivotIndex];
    } else if (pivotIndex < targetIndex) {
      left = pivotIndex + 1;
    } else {
      right = pivotIndex - 1;
    }
  }
}
