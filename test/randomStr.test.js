const { expect } = require('chai');

const randomStr = require('../lib/randomStr');

describe('randomStr', function () {
  it('randomStr().length => 7', function () {
    expect(randomStr()).to.have.lengthOf(7);
  });

  it('randomStr(2).length => 2', function () {
    expect(randomStr(2)).to.have.lengthOf(2);
  });

  it('/[_0-9a-zA-Z]+/.test(randomStr()) => true', function () {
    expect(/[_0-9a-zA-Z]+/.test(randomStr())).to.equal(true);
  });

  it('/[_0-9a-zA-Z]{7}/.test(randomStr(7)) => true', function () {
    expect(/[_0-9a-zA-Z]{7}/.test(randomStr(7))).to.equal(true);
  });

  it('/[_0-9a-zA-Z]{17}/.test(randomStr(17)) => true', function () {
    expect(/[_0-9a-zA-Z]{17}/.test(randomStr(17))).to.equal(true);
  });
});
