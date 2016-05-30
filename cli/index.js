#!/usr/bin/env node

'use strict';

const inquirer  = require('inquirer');
const exec = require('child_process').exec;
const questions = require('./question');
const template = require('./template');

console.log('Hi, welcome to Redux-template');

inquirer.prompt(questions).then((answers) => {
  if (answers.answer) {
    console.log(JSON.stringify(answers, null, '  '));
    template(answers);
  }
  else {
    console.log(';(');
  }
});
