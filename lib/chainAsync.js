/**
 * 链式 async 函数
 * 遍历含有异步操作的数组，在异步操作完成后调用 next 方法
 */
module.exports = (fns) => {
  let curr = 0;
  const last = fns[fns.length - 1];
  const next = () => {
    const fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };
  next();
};
