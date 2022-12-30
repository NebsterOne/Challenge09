// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![MIT license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // else if (license !== "None") {
  //   return `![APACHE 2.0 license](https://img.shields.io/badge/license-${APACHE}-blue.svg)`;
  // } else if (license !== "None") {
  //   return `![GPL 3.0 license](https://img.shields.io/badge/license-${GPL}-blue.svg)`;
  // } else if (license !== "None") {
  //   return `![BSD 3.0 license](https://img.shields.io/badge/license-${BSD}-blue.svg)`;
  // }

  return "";
}

//['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return ` [License #licenses])`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}  






## Desscription
${data.description}

## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [Github](#github)
  * [License](#license)
  
  ## Installation
  To install necesary dependencies, run the following command:
  
  \`\`\`
  ${data.installationCmd}
  \`\`\`
  
  ## Usage
  > ${data.usage}
  
  ## Contributing
  > ${data.ontributing}
  
  ## Test 
  To test the application, please follow the below:
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions
  > Should you have any questions, please send email to ${data.email}. 
  
  ## Github
  > https://github.com/${data.github}
  
  
  ## License 
  > ${
    data.license === "None" ? data.license : renderLicenseSection(data.license)
  }
`;
}

module.exports = generateMarkdown;
