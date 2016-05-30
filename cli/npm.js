'use strict';

const exec = require('child_process').exec;

// [TODO] read project name
module.exports.init = (answers) => {
  return new Promise((resolve, reject) => {
    exec('npm init -y', (err, o) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
