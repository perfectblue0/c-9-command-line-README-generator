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
        name: 'title',
        message: 'title'
    },
    {
        
    }
    //etc
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
