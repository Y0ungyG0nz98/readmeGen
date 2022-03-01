// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
    type: "input",
    message: "#What was your Motivation?",
    name: "motive"
    }, {
    type: "input",
    message: "Why did you Build this Project?",
    name: "why"
    }, {
    type: "input",
    message: "What Problem does it Solve?",
    name: "benefits"
    }, {
    type: "input",
    message: "What did you Learn?",
    name: "lesson"
    }, {
    type: "input",
    message: "What makes your Project Stand Out?",
    name: "difference"
    }
]);
};


// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("README was successfully created!!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
}
questions()
.then(responses => {
    return generateMarkdown(responses);
})
.then(data => {
    return writeFile(data);
});

// Function call to initialize app
init();
