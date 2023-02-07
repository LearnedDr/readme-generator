// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Welcome to readme generator!  What is the name of your application?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Great name!  Give me a detailed description on how your application works.'
    },
    // add a table of contents
    {
        name: 'installation',
        type: 'input',
        message: 'Sounds interesting.  Explain how to install your application.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
      },
    {
        name: 'usage',
        type: 'input',
        message: 'Usage: What is best way to use your application?'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'After seeing how awesome your application is, how can other contribute?'
    },
    {
        name: 'test',
        type: 'input',
        message: ''
    },
    {
        name: 'username',
        type: 'input',
        message: 'Someone wants to see your work.  What is your github username?',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Someone thinks your awesome.  What is your email for others to reach you?',
    }
    // add questions section

];

// TODO: Create a function to write README file
// const fileName = 'README.md'
const data = ""
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
        .then(()=> console.log("What a great README"))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            console.log("response", response)
    writeToFile('README.md', generateMarkdown(response))
        });
}

// Function call to initialize app
init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README