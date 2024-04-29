// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (input) => input.toLowerCase().includes("@"),
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
  },
  {
    type: "input",
    name: "installation",
    message: "Add installation instructions of the project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Add usage information of the project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Add contribution guidelines of the project.",
  },
  {
    type: "input",
    name: "test",
    message: "Add test instruction of the project.",
  },
  {
    type: "checkbox",
    name: "licence",
    message: "Choose licence of the project.",
    choices: ["MIT", "ISC", "Apache-2.0", "MPL-2.0", "ODbL", "Boost", "IPL-1.0", "Unlicence","PDDL" ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./README.md", data, (err) => {
    if (err) throw err;
    console.log("README.md file created!");
  });
}
// TODO: Ask the teacher what is this fileName

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeAnswers = generateMarkdown(answers);
      writeToFile("README.md", readmeAnswers);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
