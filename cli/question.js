'use strict';

// [TODO] id selector in enterpoint

module.exports = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name',
    validate: (value) => {

      var pass = true;
      // after fix
      // var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  }, {
    type: 'checkbox',
    message: 'Select Middleware',
    name: 'middleware',
    choices: [
      {
        name: 'Pepperoni'
      },
      {
        name: 'Ham'
      },
      {
        name: 'Ground Meat'
      },
      {
        name: 'Bacon'
      },
    ]
  },
  {
    type: 'confirm',
    name: 'answer',
    message: 'Is this OK?',
    default: true
  }
];
