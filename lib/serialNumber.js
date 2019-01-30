const { strAdjustLeft } = require('./strAdjust');

/**
 * 将数字 num 格式化成长度 len 的字符输出，空的位置用 0 补足
 * 典型用法是给数字补 0, 如: 1 => 001
 * 默认三位
 */
module.exports = (num, len = 3, addon = '0') => strAdjustLeft(`${num || ''}`, len, addon);
