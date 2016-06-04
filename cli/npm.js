'use strict';

const exec = require('child_process').exec;

// [TODO] read project name
module.exports.init = (answers) => {
  return new Promise((resolve, reject) => {
    exec('npm init -y', (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports.install = () => {
  return new Promise((resolve, reject) => {
    const packages = [
      'babel-cli',
      'babel-core',
      'babel-eslint',
      'babel-loader',
      'babel-plugin-transform-dev-warning',
      'babel-plugin-transform-function-bind',
      'babel-plugin-transform-object-assign',
      'babel-plugin-transform-react-constant-elements',
      'babel-plugin-transform-react-inline-elements',
      'babel-plugin-transform-react-remove-prop-types',
      'babel-plugin-transform-replace-object-assign',
      'babel-plugin-transform-strict-mode',
      'babel-polyfill',
      'babel-preset-es2015',
      'babel-preset-react',
      'babel-preset-stage-0',
      'babel-preset-stage-1',
      'babel-runtime',
      'redux-devtools',
      'redux-logger'
    ];

    exec(`npm i -D ${packages.join(' ')}`, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
