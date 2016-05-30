'use strict';

const path = require('path');
const fs = require('fs-extra');

const current = process.cwd();
const templatesPath = `${(__dirname).split('/cli')[0]}/templates`;
const entryPointDir = 'src';

module.exports = (answers) => {
  Promise.resolve().then(() => {
    return mkdir(entryPointDir);
  }).then(() => {
    return copyDirs(templatesPath, current);
  });
};

function mkdir(dirname) {
  return new Promise((resolve, reject) => {
    fs.mkdirs(path.resolve(current, dirname), (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function copyDirs(from, to) {
  return new Promise((resolve, reject) => {
    fs.copy(from, to, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
