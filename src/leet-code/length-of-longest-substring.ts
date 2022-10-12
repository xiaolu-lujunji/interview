/**
 * @source [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
 * @tag 滑动窗口
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  const set = new Set<string>(s[0]);
  let i = 0;
  let result = 1;
  for (let j = 1; j < s.length; ++j) {
    const char = s[j];
    while (set.has(char)) {
      set.delete(s[i]);
      i++;
    }

    result = Math.max(result, j - i + 1);

    set.add(char);
  }
  return result;
}
