const fs = require('fs');
const slash = require('slash');
const packageJson = require('./packageJson');
const underPath = require('./underPath');

/**
 * 获取 bin 目录下的所有命令名称，其实就是检查下目录名
 */
exports.cmdUnderDirBin = () => fs.readdirSync(underPath('bin'));

/**
 * 获取 package.json 文件中 bin 字段包含的命令名称
 */
exports.cmdInPkgJson = () => packageJson.bin || {};

/**
 * 获取当前目录所属的 bin 命令名称
 */
exports.getCurCmd = (filename) => {
  const nameArr = slash(filename).split('/').slice(-2); // 取最后两位
  // 第一位存在，且第二位以 .js 为结尾
  // e.g. /x-bin/bin/xbin/xbin.js
  if (nameArr[0] && nameArr[1].includes('.js')) {
    return nameArr[0];
  }
  return '';
};

/**
 * 检查：
 *  1. package.json 中的 bin 选项是否有命令 name 的信息
 *  2. bin 目录下是否含有本命令 name 的相应文件
 */
exports.checkBin = (name) => {
  const bin = exports.cmdInPkgJson();
  const file = underPath('root', exports.formatBinFile(name)); // 使用完整路径来判断
  return {
    hasBinInfo: Object.keys(bin).includes(name),
    hasBinFile: fs.existsSync(file),
  };
};

/**
 * 统一规范 bin 命令文件的名字和位置
 * 放在 bin 目录下的同名目录 name 中
 */
exports.formatBinFile = name => `bin/${name}/${name}.js`;

/**
 * 获取 file 的权限信息（wrx）
 */
exports.getMode = (file) => {
  const stat = fs.statSync(file);
  return (stat.mode & 0o777).toString(8); // eslint-disable-line
};
