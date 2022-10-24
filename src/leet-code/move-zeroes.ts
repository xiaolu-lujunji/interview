/**
 * @description 283. 移动零
 * @see https://leetcode.cn/problems/move-zeroes/
 * @tag 荷兰国旗问题
 */
function moveZeroes(nums: number[]): void {
  let j = -1;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      j++;
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    i++;
  }
}
