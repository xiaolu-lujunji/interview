/**
 * @description 71. 简化路径
 * @see https://leetcode.cn/problems/simplify-path/
 * @tag 栈
 */
function simplifyPath(path: string): string {
  // 处理 // 和 .
  const components: string[] = path
    .split("/")
    .filter((component) => component !== "" && component !== ".");
  const normalizedComponents: string[] = [];
  components.forEach((component) => {
    if (component === "..") {
      normalizedComponents.pop();
    } else {
      normalizedComponents.push(component);
    }
  });
  // 以 / 开头
  return "/" + normalizedComponents.join("/");
}
