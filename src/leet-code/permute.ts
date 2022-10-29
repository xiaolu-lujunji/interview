/**
 * @description 46. 全排列
 * @see https://leetcode.cn/problems/permutations/
 * @tag 回溯
 */
function permute(nums: number[]): number[][] {
  const results: number[][] = [];
  const result = nums.slice();

  const swap = (index1: number, index2: number) => {
    const temp = result[index1];
    result[index1] = result[index2];
    result[index2] = temp;
  };

  const backtrace = (currentIndex: number) => {
    if (currentIndex === nums.length) {
      results.push(result.slice());
    }
    for (let i = currentIndex; i < nums.length; ++i) {
      swap(currentIndex, i);
      backtrace(currentIndex + 1);
      swap(currentIndex, i);
    }
  };

  backtrace(0);

  return results;
}

function permute2(nums: number[]): number[][] {
  if (nums.length === 1) return [nums];

  let results: number[][] = [];

  for (let i = 0; i < nums.length; ++i) {
    const restNumbers = nums.slice();
    restNumbers.splice(i, 1);

    results = results.concat(
      permute(restNumbers).map((result) => [nums[i], ...result])
    );
  }

  return results;
}
