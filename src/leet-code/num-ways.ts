/**
 * @description LCP 07. 传递信息
 * @see https://leetcode.cn/problems/chuan-di-xin-xi/
 * @tag 深度优先搜索 广度优先搜索 动态规划
 */
function numWays(n: number, relation: number[][], k: number): number {
  const nodeToAdjacentNodesMap = new Map<number, number[]>();

  relation.forEach(([node, adjacentNode]) => {
    let adjacentNodes = nodeToAdjacentNodesMap.get(node);
    if (adjacentNodes === undefined) {
      adjacentNodes = [];
      nodeToAdjacentNodesMap.set(node, adjacentNodes);
    }
    adjacentNodes.push(adjacentNode);
  });

  const dfs = (node: number, length: number, n: number, k: number) => {
    if (length > k) return 0;
    if (length === k && node === n - 1) return 1;
    const adjacentNodes = nodeToAdjacentNodesMap.get(node);
    if (adjacentNodes === undefined) return 0;
    let ways = 0;
    for (const adjacentNode of adjacentNodes) {
      ways += dfs(adjacentNode, length + 1, n, k);
    }
    return ways;
  };

  return dfs(0, 0, n, k);
}
