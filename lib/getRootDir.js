const path = require('path');

const {
  faillog,
} = require('./log');

const {
  yellow,
} = require('./colorStr');

const {
  hasFile,
} = require('./fileOp');

const getPkgJson = require('./getPkgJson');

let cacheDir; // 缓存结果

/**
 * 存在 node_modules 的目录视作项目的 root 目录
 */
module.exports = () => {
  if (cacheDir) {
    return cacheDir;
  }

  let layer = 10; // 限制从当前目录向上找 10 层
  let curDir = __dirname;
  while (layer--) {
    // 子模块的情形需要排除自身
    if (hasFile(curDir, ['node_modules', 'package.json']) && getPkgJson(curDir).name !== '@new4/utils') {
      cacheDir = curDir;
      return curDir;
    }
    curDir = path.join(curDir, '..');
  }
  return faillog(`no directory ${yellow('node_modules')} found after searching ${yellow(layer)} layers`);
};
