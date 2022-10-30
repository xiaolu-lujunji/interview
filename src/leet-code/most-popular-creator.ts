/**
 * @description 6221. 最流行的视频创作者
 * @see https://leetcode.cn/problems/most-popular-video-creator/
 * @tag 模拟
 */
function mostPopularCreator(
  creators: string[],
  ids: string[],
  views: number[]
): string[][] {
  const map = new Map<
    string,
    { totalView: number; maxView: number; id: string }
  >();
  let maxTotalView = -1;
  for (let i = 0; i < creators.length; ++i) {
    const creator = creators[i];
    const id = ids[i];
    const view = views[i];

    let info = map.get(creator);
    if (info === undefined) {
      info = { totalView: 0, maxView: -1, id: "" };
      map.set(creator, info);
    }

    info.totalView += view;
    if (view > info.maxView || (view === info.maxView && id < info.id)) {
      info.maxView = view;
      info.id = id;
    }

    if (info.totalView > maxTotalView) {
      maxTotalView = info.totalView;
    }
  }
  const result: string[][] = [];
  for (const [creator, info] of map.entries()) {
    if (info.totalView === maxTotalView) {
      result.push([creator, info.id]);
    }
  }
  return result;
}
