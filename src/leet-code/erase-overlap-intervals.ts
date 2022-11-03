/**
 * @description 435. 无重叠区间
 * @see https://leetcode.cn/problems/non-overlapping-intervals/
 * @tag 贪心
 */
function eraseOverlapIntervals(intervals: number[][]): number {
  const isOverlap = (interval1: number[], interval2: number[]) => {
    const right = interval2[0] >= interval1[1];
    const left = interval2[1] <= interval1[0];
    return !(left || right);
  };

  let result = 0;
  let preInterval: number[] | undefined;
  const sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);
  for (const interval of sortedIntervals) {
    if (preInterval === undefined) {
      preInterval = interval;
    } else {
      if (isOverlap(preInterval, interval)) {
        result++;
        preInterval = preInterval;
      } else {
        preInterval = interval;
      }
    }
  }

  return result;
}
