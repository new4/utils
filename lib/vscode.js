const execa = require('execa');

const { yellow } = require('./colorStr');
const { sbValidPath } = require('./shouldBe');

exports.code = async (file) => {
  sbValidPath(file, `${yellow(file)} not existed!`);
  const { stdout } = await execa('code', [file]);
  console.log(stdout);
};
