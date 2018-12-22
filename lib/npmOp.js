const execa = require('execa');
const underPath = require('./underPath');

const cwd = underPath('root');

const {
  logBefore,
  successlog,
  successlogAfter,
} = require('./log');

const {
  cyan,
} = require('./colorStr');

/**
 * 执行 npm link 建立链接
 */
async function link() {
  await execa('npm', ['link'], {
    cwd,
  });
  successlogAfter('link');
}

/**
 * 执行 npm unlink 取消链接
 */
async function unlink() {
  await execa('npm', ['unlink'], {
    cwd,
  });
  successlog('unlink');
}

module.exports = {
  link,
  unlink,

  /**
   * 执行 unlink -> link 来重建链接
   */
  async relink() {
    logBefore(cyan('[re-link]:'));
    await unlink();
    await link();
  },
};
