// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== undefined) {
    return `![license](https://img.shields.io/badge/License-${license}-green)`;
  }
  return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== undefined) {
    return '\n [License](#license)\n';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== undefined) {
  return `## License 

Licensed under the ${data.license} license`;
} return '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Credits](#credits)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributing}
  ## Test Instructions
  ${data.tests}
  ## License
  ${data.license}
  
  ## Contact
`;
}

module.exports = generateMarkdown;



// https://www.markdownguide.org/cheat-sheet/

// const generateReadMe = ({ title, description, installation, usage, license, contributing, tests }) =>
//     `# ${title}
