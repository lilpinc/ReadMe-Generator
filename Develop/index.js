// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

console.log("Welcome to my ReadMe Generator");
console.log("Please answer all questions to generate your quality Readme!")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        default: 'Project Title',
        validate: (answer) => (answer.length > 1) ? true : console.log('Please enter a response for your project title')
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        default: 'Project Description',
        validate: (answer) => (answer.length > 1) ? true : console.log('Please enter a response for your project description')
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your project installation instructions?',
        default: 'Project Installation Instructions',
        validate: (answer) => (answer.length > 1) ? true : console.log('Please enter a response for your project installation instructions')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project usage information?',
        default: 'Project Usage',
        validate: (answer) => (answer.length > 1) ? true : console.log('Please enter a response for your project usage')
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for this project?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        // default: 'MIT License',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your project contribution guidelines?',
        default: 'Project Contributions',
        validate: (answer) => (answer.length > 1) ? true : console.log('Please enter a response for your project contributions')
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your project test instructions?',
        default: 'Project Test Instructions',
        validate: (answer) => (answer.length > 1) ? true : console.log('Please enter a response for your project test instructions')
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
            writeToFile('README,md', generateMarkdown(answers));
        });
};


// Function call to initialize app
init();
