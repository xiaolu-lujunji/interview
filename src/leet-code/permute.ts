/**
 * @source [46. 全排列](https://leetcode.cn/problems/permutations/)
 * @tag 回溯
 */
function permute(nums: number[]): number[][] {
  const helper = (numbers: number[]): number[][] => {
    if (numbers.length === 1) return [numbers];

    let result: number[][] = [];
    for (let i = 0; i < numbers.length; ++i) {
      const newNumbers = numbers.slice();
      newNumbers.splice(i, 1);
      const children = helper(newNumbers);
      children.forEach((child) => {
        child.unshift(numbers[i]);
        result.push(child);
      });
    }

    return result;
  };

  return helper(nums);
}
