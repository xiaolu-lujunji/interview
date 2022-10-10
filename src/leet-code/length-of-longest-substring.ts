/**
 * [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
 */
export default function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let i = 0;
  let result = 0;
  for (let j = 0; j < s.length; ++j) {
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
