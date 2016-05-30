#!/usr/bin/env node

'use strict';

const inquirer  = require('inquirer');
const chalk = require('chalk');
const questions = require('./question');
const template = require('./template');
const npm = require('./npm');

console.log('Hi, welcome to Redux-template');

inquirer.prompt(questions).then((answers) => {
  if (answers.answer) {
    npm.init().then(() => {
      console.log(chalk.blue('create package.json'));
      console.log(JSON.stringify(answers, null, '  '));
      template(answers);
    }).catch((e) => {
      console.log(chalk.red('error'));
    });
  }
  else {
    console.log(';(');
  }
});
