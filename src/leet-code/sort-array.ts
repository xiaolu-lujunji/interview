/**
 * @description 912. 排序数组
 * @see https://leetcode.cn/problems/sort-an-array/
 * @tag 快速排序 堆排序 归并排序
 */
function sortArray(nums: number[]): number[] {
  const swap = (numbers: number[], index1: number, index2: number) => {
    const temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
  };

  const partition = (
    numbers: number[],
    startIndex: number,
    endIndex: number
  ) => {
    const pivot =
      numbers[
        startIndex + Math.floor(Math.random() * (endIndex - startIndex + 1))
      ];
    let left = startIndex - 1;
    let right = endIndex + 1;
    let i = startIndex;
    while (i < right) {
      if (numbers[i] === pivot) {
        i++;
      } else if (numbers[i] > pivot) {
        swap(numbers, i, --right);
      } else {
        swap(numbers, i++, ++left);
      }
    }
    return [left, right];
  };

  const quickSort = (
    numbers: number[],
    startIndex: number,
    endIndex: number
  ) => {
    if (startIndex >= endIndex) return;
    const [left, right] = partition(numbers, startIndex, endIndex);
    quickSort(numbers, startIndex, left);
    quickSort(numbers, right, endIndex);
  };

  quickSort(nums, 0, nums.length - 1);

  return nums;
}
