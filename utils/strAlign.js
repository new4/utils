/**
 * 生成居中对齐的字符串，主要方法是将 left 字符串调整成固定长度
 *
 * @param {String} center 中间位置的字串
 * @param {String} left 左边位置的字串
 * @param {String} right 右边位置的字串
 * @param {Number} leftLen 左边字符串默认长度，不足以空格补足
 * @return {String} 拼接的字符串
 */
exports.center = (center, left, right, leftLen = 17) => {
  const REPLACER = '...'; // 用于替换多余字符的字串

  // 左边比边界还长的，格式化长度并设最后的三个字符为 ...
  if (left.length > leftLen) {
    left.length = leftLen;
    left = left.split('').slice(0, leftLen - REPLACER.length).concat(REPLACER).join('');
  }

  // 生成左字符串的补足字串
  let delta = leftLen - left.length;
  let addon = '';
  while (delta--) {
    addon += ' ';
  }

  return `${addon}${left} ${center} ${right}`;
};
