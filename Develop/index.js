// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require("fs").promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Write short description of the project",
    },
    {
      type: "input",
      name: "installationCmd",
      message: "What command should be rune to install dependencies?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo",
    },
    {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo",
    },
    {
      type: "input",
      name: "email",
      message: "What email address shoud be used for more questions?",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //Writing to file
  fs.writeFile("README.md", generateMarkdown(answers), (err) =>
    err ? console.error(err) : console.log("Successfully written to README.md")
  );
}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile("README.md", generateMarkdown(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
