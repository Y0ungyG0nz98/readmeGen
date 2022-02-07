// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "#What was your Motivation?",
    name: "Motive"
}, {
    type: "input",
    message: "Why did you Build this Project?",
    name: "The Why"
}, {
    type: "input",
    message: "What Problem does it Solve?",
    name: "Benefits"
}, {
    type: "input",
    message: "What did you Learn?",
    name: "Lesson"
}, {
    type: "input",
    message: "What makes your Project Stand Out?",
    name: "Difference"
}];

// TODO: Create a function to write README file
function writeToFile() {
    fs.writeFile('README.md')
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
