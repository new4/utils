/**
 * 辅助 LeetCode 调试的方法
 */

/**
 * 转换数组为 interval 类型的数组
 * 如：[[1, 2], [3, 5]] => [{start: 1, end: 2}, {start: 3, end: 5}]
 */
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  toString() {
    return `[${this.start}, ${this.end}]`;
  }
}
exports.intervalCreator = arr => arr.map(([start, end]) => new Interval(start, end));

/**
 *
 * 转换数组为链表结构
 * 如：[1, 2] => {val: 1, next: {val: 2, next: null}}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  toString() {
    let str = `${this.val}`;
    let node = this.next;
    while (node) {
      str += ` -> ${node.val}`;
      node = node.next;
    }
    return str;
  }
}
exports.linkedListCreator = (arr) => {
  const head = new ListNode(null);
  if (!arr.length) {
    return head;
  }

  for (let i = arr.length - 1; i !== -1; i--) {
    const node = new ListNode(arr[i]);
    node.next = head.next;
    head.next = node;
  }
  return head.next;
};
