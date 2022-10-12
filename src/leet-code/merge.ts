/**
 * @source [88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)
 * @tag 逆向双指针
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[i + j + 1] = nums1[i];
      i--;
    } else {
      nums1[i + j + 1] = nums2[j];
      j--;
    }
  }

  while (j >= 0) {
    nums1[i + j + 1] = nums2[j];
    j--;
  }
}
