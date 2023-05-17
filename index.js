// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// takes questions array responses and puts them in generateMarkdown file in utils folder
const path = require("path");

// gets data in generateMarkdown file and brings to this file
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the what, why, and how of this project',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain the steps required to install the project',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Share the guidelines for how to contribute to this project',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests for this project',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license applicable to this project',
        choices: ["MIT", "Apache2.0", "Boost1.0", "Mozilla2.0", "none"],
        validate: (res)=>{if(res){return true} else {return "please pick response to continue"}}
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("./dist/README.md", generateMarkdown({ ...answers}));
    });
}

// Function call to initialize app
init();
