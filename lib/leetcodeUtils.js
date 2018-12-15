/**
 * 辅助 LeetCode 调试的方法
 */

/**
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 *
 * 转换数组为 interval 类型的数组
 * 如：[[1, 2], [3, 5]] => [{start: 1, end: 2}, {start: 3, end: 5}]
 */
exports.intervalCreator = arr => arr.map(([start, end]) => ({
  start,
  end,
}));
