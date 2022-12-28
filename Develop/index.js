// TODO: Include packages needed for this application

cconst inquirer = require('inquirer');
const fs = require('fs');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
},
{
  type: 'input',
  name: 'location',
  message: 'Where are you from?',
},
{
  type: 'input',
  name: 'hobby',
  message: 'What is your favorite hobby?',
},
{
  type: 'input',
  name: 'food',
  message: 'What is your favorite food?',
},
{
  type: 'input',
  name: 'github',
  message: 'Enter your GitHub Username',
},
{
  type: 'input',
  name: 'linkedin',
  message: 'Enter your LinkedIn URL.',
},
{
  type: 'list',
  name: 'license',
  message: 'What kind of license should your project have?',
  choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

//Writing to file
fs.writeFile('README.md', generateMarkdown(answers), (err) => 
    err ? console.error(err) : console.log('Successfully written to README.md')
);



// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();


