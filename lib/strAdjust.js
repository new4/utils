const strAdjust = (pos, str, len = 7, addon = ' ') => {
  const { length } = str.split('');
  if (length >= len) {
    return str;
  }
  return pos === 'left'
    ? [addon.repeat(len - length), str].join('')
    : [str, addon.repeat(len - length)].join('');
};

exports.strAdjustLeft = (str, len = 7, addon = ' ') => strAdjust('left', str, len, addon);

exports.strAdjustRight = (str, len = 7, addon = ' ') => strAdjust('right', str, len, addon);
