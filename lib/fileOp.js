const fs = require('fs');
const path = require('path');

const {
  isString,
  isArray,
} = require('lodash');

/**
 * 获取 file 的权限信息（wrx）
 */
exports.getMode = (file) => {
  const stat = fs.statSync(file);
  return (stat.mode & 0o777).toString(8); // eslint-disable-line
};

/**
 * dir 中含有 filesList 列出来的文件
 */
exports.hasFile = (dir, filesList) => {
  if (!filesList) {
    return false;
  }

  if (isString(filesList)) {
    filesList = [filesList];
  }

  if (!isArray(filesList)) {
    return false;
  }

  for (let i = 0, len = filesList.length; i < len; i++) {
    if (!fs.existsSync(path.join(dir, filesList[i]))) {
      return false;
    }
  }
  return true;
};
