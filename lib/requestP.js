const request = require('request');

/**
 * 使用 Promise 包一层，用于 async/await 写法
 */
module.exports = function requestP(options) {
  // 未指定 timeout 时间的，默认 10s
  if (!options.timeout) {
    options.timeout = 10 * 1000;
  }
  return new Promise((resolve, reject) => {
    request(options, (err, response, body) => {
      if (err) {
        reject(err);
      }
      resolve([response, body]);
    });
  });
};
