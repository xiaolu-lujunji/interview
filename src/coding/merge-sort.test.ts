function sortArray(nums: number[]): number[] {
  const sort = (numbers: number[], start: number, end: number) => {
    if (start >= end) return;
    const mid = start + Math.floor((end - start) / 2);
    sort(numbers, start, mid);
    sort(numbers, mid + 1, end);

    const temp = [];
    let k = 0;
    let i = start;
    let j = mid + 1;
    while (i <= mid && j <= end) {
      temp[k++] = numbers[i] < numbers[j] ? numbers[i++] : numbers[j++];
    }
    while (i <= mid) {
      temp[k++] = numbers[i++];
    }
    while (j <= end) {
      temp[k++] = numbers[j++];
    }
    for (let i = 0; i < temp.length; i++) {
      numbers[start + i] = temp[i];
    }
  };

  const result = nums.slice();
  sort(result, 0, result.length - 1);
  return result;
}

describe("mergeSort", () => {
  test("测试用例 1", () => {
    const numbers = [2, 3, 1, 5, 4];
    expect(sortArray(numbers)).toEqual([1, 2, 3, 4, 5]);
  });
});
