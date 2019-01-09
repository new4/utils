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

function getExist(dir, fn, type) {
  return fs
    .readdirSync(dir)
    .filter((file) => {
      const fsStat = fs.statSync(path.join(dir, file));
      return type === 'file' ? fsStat.isFile() : fsStat.isDirectory();
    })
    .filter(file => fn(file));
}

/**
 * 获取 dir 目录下所有符合 fn 函数的文件名
 */
exports.getExistFiles = (dir, fn = () => 1) => getExist(dir, fn, 'file');

/**
 * 获取 dir 目录下所有符合 fn 函数的目录名
 */
exports.getExistDirs = (dir, fn = () => 1) => getExist(dir, fn, 'dir');
