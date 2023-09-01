// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("../utils/generateMarkdown");

console.log("Welcome to my ReadMe Generator");
console.log("Please answer all questions to generate your quality Readme!");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        default: 'Project Title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        default: 'Project Description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your project installation instructions?',
        default: 'Project Installation Instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project usage information?',
        default: 'Project Usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for this project?',
        choices: ['Apache', 'GNU', 'MIT', 'BSD2', 'BSD3', 'BoostSoftware', 'CreativeCommonsZero', 'Eclipse', 'GNUAffero', 'GNUv2.0', 'GNULesserv2.1', 'Mozilla2.0', 'TheUnlicense'],
        // default: 'MIT License',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your project contribution guidelines?',
        default: 'Project Contributions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your project test instructions?',
        default: 'Project Test Instructions',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Your ReadMe has successfully been created!'));

};
// TODO: Create a function to initialize app
function init() {
    // call the questions array
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            writeToFile('README.md', generateMarkdown(answers));
        });
};


// Function call to initialize app
init();
