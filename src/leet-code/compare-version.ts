/**
 * @source [165. 比较版本号](https://leetcode.cn/problems/compare-version-numbers)
 * @tag 双指针
 */
function compareVersion(version1: string, version2: string): number {
  let i = 0;
  let j = 0;
  while (i < version1.length || j < version2.length) {
    let reversion1 = 0;
    while (i < version1.length && version1[i] !== ".") {
      reversion1 =
        reversion1 * 10 + version1[i].charCodeAt(0) - "0".charCodeAt(0);
      i++;
    }
    i++;

    let reversion2 = 0;
    while (j < version2.length && version2[j] !== ".") {
      reversion2 =
        reversion2 * 10 + version2[j].charCodeAt(0) - "0".charCodeAt(0);
      j++;
    }
    j++;

    if (reversion1 > reversion2) {
      return 1;
    } else if (reversion1 < reversion2) {
      return -1;
    }
  }

  return 0;
}
