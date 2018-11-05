const fs = require('fs');
const path = require('path');

const {
  faillog,
} = require('./log');

const {
  yellow,
} = require('./colorStr');

let cacheDir;

module.exports = () => {
  if (cacheDir) {
    return cacheDir;
  }

  let layer = 10; // 限制从当前目录向上找 10 层
  let curDir = __dirname;
  while (layer--) {
    if (fs.existsSync(path.join(curDir, 'node_modules'))) {
      cacheDir = curDir;
      return curDir;
    }
    curDir = path.join(curDir, '..');
  }
  return faillog(`no directory ${yellow('node_modules')} found after searching ${yellow(layer)} layers`);
};
