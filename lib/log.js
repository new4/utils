const {
  isObjectLike,
} = require('lodash');

const {
  success,
  warning,
  fail,
} = require('./icons');

const {
  red,
  yellow,
  cyan,
} = require('./colorStr');

const {
  jsonStringify,
} = require('./jsonOp');

/**
 * console.log 的代理
 */
function log(str) {
  if (isObjectLike(str)) {
    str = jsonStringify(str);
  }
  console.log(str ? `  ${str}` : '');
}
exports.log = log;

/**
 * 在前面空出一行
 */
exports.logBefore = (str) => {
  log();
  log(str);
};

/**
 * 在前后都空出一行
 */
exports.logBoth = (str) => {
  log();
  log(str);
  log();
};

/**
 * 在后面空出一行
 */
exports.logAfter = (str) => {
  log(str);
  log();
};

// successlog|successlogBefore|successlogAfter|successlogBoth
// warninglog|warninglogBefore|warninglogAfter|warninglogBoth
// faillog|faillogBefore|faillogAfter|faillogBoth
[
  ['success', str => cyan(`${success} ${str}`)],
  ['warning', str => yellow(`${warning} ${str}`)],
  ['fail', str => red(`${fail} ${str}`)],
].forEach(([prefix, strFn]) => {
  [
    'log',
    'logBefore',
    'logAfter',
    'logBoth',
  ].forEach(suffix => exports[`${prefix}${suffix}`] = str => exports[suffix](strFn(str)));
});

/**
 * 清空输出
 */
exports.clearlog = () => process.stdout.write('\u001b[2J\u001b[0;0H');
