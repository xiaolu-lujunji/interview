/**
 * @description 40. 组合总和 II
 * @see https://leetcode.cn/problems/combination-sum-ii/
 * @tag 回溯
 */
function combinationSum2(candidates: number[], target: number): number[][] {
  const candidateToTimesMap = new Map<number, number>();
  for (const candidate of candidates) {
    const times = candidateToTimesMap.get(candidate);
    if (times === undefined) {
      candidateToTimesMap.set(candidate, 1);
    } else {
      candidateToTimesMap.set(candidate, times + 1);
    }
  }

  const uniqueCandidates: number[] = Array.from(candidateToTimesMap.keys());

  const results: number[][] = [];
  const result: number[] = [];
  const helper = (acc: number, index: number) => {
    if (index > candidates.length) return;
    if (acc > target) return;
    if (acc === target) {
      results.push(result.slice());
      return;
    }
    const times = candidateToTimesMap.get(uniqueCandidates[index])!;
    for (let i = 0; i <= times; ++i) {
      if (i !== 0) {
        result.push(uniqueCandidates[index]);
      }
      helper(acc + i * uniqueCandidates[index], index + 1);
    }
    for (let i = 0; i < times; ++i) {
      result.pop();
    }
  };

  helper(0, 0);

  return results;
}
