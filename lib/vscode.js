const execa = require('execa');

const { faillogBoth } = require('./log');
const { yellow } = require('./colorStr');
const { sbValidPath } = require('./shouldBe');

exports.code = async (file) => {
  sbValidPath(file, `${yellow(file)} not existed!`);
  try {
    await execa('code', [file]);
  } catch (e) {
    faillogBoth(`open ${yellow(file)} by ${yellow('vscode code-cli')} failed!`);
  }
};
