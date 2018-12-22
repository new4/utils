const fse = require('fs-extra');
const path = require('path');

/**
 * 获取 package.json 文件的内容
 */
module.exports = dir => fse.readJsonSync(path.join(dir, 'package.json'));
