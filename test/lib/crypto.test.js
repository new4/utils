const { expect } = require('chai');
const { encrypt, decrypt } = require('../../lib/crypto');
const randomStr = require('../../lib/randomStr')();

describe('crypto', function () {
  it('decrypt(encrypt(randomStr)) => randomStr', function () {
    expect(decrypt(encrypt(randomStr))).to.equal(randomStr);
  });
});
