const { center } = require('../../lib/strAlign');
const { itWrapperCreator } = require('../utils');

const itWrapper = itWrapperCreator('center', center);

describe('strAlign', function () {
  describe('center', function () {
    [
      {
        args: ['@', 'eat', 'rice'],
        expected: '              eat @ rice',
      },
      {
        args: ['@', 'my delicious', 'rice'],
        expected: '     my delicious @ rice',
      },
      {
        args: ['@', 'my delicious', 'rice', -1],
        expected: '... @ rice',
      },
      {
        args: ['@', 'my delicious', 'rice', 0],
        expected: '... @ rice',
      },
      {
        args: ['@', 'my delicious', 'rice', 2],
        expected: '... @ rice',
      },
      {
        args: ['@', 'my delicious', 'rice', 3],
        expected: '... @ rice',
      },
      {
        args: ['@', 'my delicious', 'rice', 5],
        expected: 'my... @ rice',
      },
      {
        args: ['[@]', 'my delicious', 'rice', 12],
        expected: 'my delicious [@] rice',
      },
      {
        args: ['[@]', 'my delicious', 'rice', 10],
        expected: 'my deli... [@] rice',
      },
      {
        args: ['[@]', 'my delicious', 'rice', 20],
        expected: '        my delicious [@] rice',
      },
    ].forEach(({ args, expected }) => itWrapper(args, expected));
  });
});
