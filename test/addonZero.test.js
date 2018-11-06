const { expect } = require('chai');

const addonZero = require('../lib/addonZero');

describe('addonZero', function () {
  describe('不传参数', function () {
    it('addonZero() => 000', function () {
      expect(addonZero()).to.equal('000');
    });
  });

  describe('传一个参数', function () {
    it('addonZero(0) => 000', function () {
      expect(addonZero(0)).to.equal('000');
    });

    it('addonZero(1) => 001', function () {
      expect(addonZero(1)).to.equal('001');
    });

    it('addonZero(12) => 012', function () {
      expect(addonZero(12)).to.equal('012');
    });

    it('addonZero("12") => 012', function () {
      expect(addonZero('12')).to.equal('012');
    });
  });

  describe('传两个参数', function () {
    it('addonZero("12", 1) => 12', function () {
      expect(addonZero('12', 1)).to.equal('12');
    });
    it('addonZero("12", 2) => 12', function () {
      expect(addonZero('12', 2)).to.equal('12');
    });
    it('addonZero("12", 3) => 012', function () {
      expect(addonZero('12', 3)).to.equal('012');
    });
    it('addonZero("12", 5) => 00012', function () {
      expect(addonZero('12', 5)).to.equal('00012');
    });
    it('addonZero("12", 10) => 00012', function () {
      expect(addonZero('12', 10)).to.equal('0000000012');
    });
  });

  describe('传三个参数', function () {
    it('addonZero("1", 5,"$") => $$$$1', function () {
      expect(addonZero('1', 5, '$')).to.equal('$$$$1');
    });
  });
});
