/**
 * @description 31. 下一个排列
 * @see https://leetcode.cn/problems/next-permutation/
 */
function nextPermutation(nums: number[]): void {
  const swap = (numbers: number[], i: number, j: number) => {
    const temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
  };

  let i = nums.length - 1;
  while (i - 1 >= 0) {
    if (nums[i] <= nums[i - 1]) {
      i--;
    } else {
      break;
    }
  }

  if (i - 1 >= 0) {
    const smallerNumber = nums[i - 1];
    let j = nums.length - 1;
    while (nums[j] <= smallerNumber) {
      j--;
    }
    swap(nums, i - 1, j);
  }

  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
