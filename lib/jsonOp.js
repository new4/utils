/**
 * 将 obj 转成含缩进格式的输出字串，默认缩进 2 空格
 */
const jsonStringify = obj => JSON.stringify(obj, null, 2);

module.exports = {
  jsonStringify,
};
