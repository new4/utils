const request = require('request');

/**
 * 使用 Promise 包一层，用于 async/await 写法
 */
module.exports = function requestP(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, response, body) => {
      if (err) {
        reject(err);
      }
      resolve([response, body]);
    });
  });
};
