// TODO: Include packages needed for this application(download npm inquirer)

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the what, why, and how of this project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain the steps required to install the project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Share the guidelines for how to contribute to this project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for this project'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Title'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license applicable to this project',
        choices: ["MIT", "Apache License 2.0", "Boost Software License 1.0", "Eclipse Public License 2.0", "none"],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    // todo: ad fs code to save file
// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('whaeeeves', markdownText);
    })
// Function call to initialize app
init();
