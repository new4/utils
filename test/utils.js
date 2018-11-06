const { expect } = require('chai');

exports.itWrapperCreator = function (fnName, fn) {
  return function (args, expected) {
    const serializedArgs = JSON.stringify(args).replace(/(\[|\])/g, '').replace(',', ', ');
    return it(
      `${fnName}(${serializedArgs}) => ${expected}`,
      () => expect(fn(...args)).to.equal(expected),
    );
  };
};
