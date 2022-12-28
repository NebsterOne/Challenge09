// TODO: Include packages needed for this application

cconst inquirer = require('inquirer');
const fs = require('fs');

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
fs.writeFile('README.MD', generateMarkdown(answers), (err) => 
    err ? console.error(err) : console.log('Success!')
);

const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



.then((answers) => {
  const htmlPageContent = generateHTML(answers);

  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();