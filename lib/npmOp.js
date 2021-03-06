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

/**
 * 执行 npm init --yes 初始化项目
 */
async function npmInit(dir) {
  await execa('npm', ['init', '-y'], {
    cwd: dir,
  });
}

/**
 * 安装
 */
async function npmInstall(dir, deps, cb, isDev) {
  let ops = ['install'].concat(deps);
  if (isDev) {
    ops = ops.concat('-D');
  }
  const {
    stdout,
  } = await execa('npm', ops, {
    cwd: dir,
  });
  cb(stdout);
}

/**
 * 执行安装开发依赖
 */
async function npmInstallDevDeps(dir, devDeps, cb = () => { }) {
  await npmInstall(dir, devDeps, cb, true);
}

/**
 * 执行安装项目依赖
 */
async function npmInstallDeps(dir, deps, cb = () => { }) {
  await npmInstall(dir, deps, cb);
}

module.exports = {
  npmInit,
  npmInstallDeps,
  npmInstallDevDeps,
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
