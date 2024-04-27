// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation instructions of the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add usage information of the project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Add contribution guidelines of the project.'
    },
    {
        type: 'input',
        name: 'instruction',
        message: 'Add test instruction of the project.'
    },
    {
        type: 'checkbox',
        name: 'licence',
        message: 'Choose licence of the project.',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'AFL-3.0', 'GPL']
    }
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}








// TODO: Create a function to initialize app
function init() {}




// Function call to initialize app
init();
