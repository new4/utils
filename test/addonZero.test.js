const { expect } = require('chai');
const addonZero = require('../lib/addonZero');
const { itWrapperCreator } = require('./utils');

const itWrapper = itWrapperCreator('addonZero', addonZero);

describe('addonZero', function () {
  describe('不传参数', function () {
    it('addonZero() => 000', function () {
      expect(addonZero()).to.equal('000');
    });
  });

  describe('传一个参数', function () {
    [
      {
        args: [0],
        expected: '000',
      },
      {
        args: [1],
        expected: '001',
      },
      {
        args: [12],
        expected: '012',
      },
      {
        args: ['ad'],
        expected: '0ad',
      },
    ].forEach(({ args, expected }) => itWrapper(args, expected));
  });

  describe('传两个参数', function () {
    [
      {
        args: ['12', 1],
        expected: '12',
      },
      {
        args: ['12', 2],
        expected: '12',
      },
      {
        args: ['12', 3],
        expected: '012',
      },
      {
        args: ['12', 5],
        expected: '00012',
      },
      {
        args: ['12', 10],
        expected: '0000000012',
      },
    ].forEach(({ args, expected }) => itWrapper(args, expected));
  });

  describe('传三个参数', function () {
    [
      {
        args: ['1', 5, '$'],
        expected: '$$$$1',
      },
      {
        args: ['1234', 5, '$'],
        expected: '$1234',
      },
    ].forEach(({ args, expected }) => itWrapper(args, expected));
  });
});
