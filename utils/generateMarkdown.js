// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-green.svg)`;
  }
  return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return '[License](#license)';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
  return `## License 
 ${license} license`;
} return '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test Instructions](#tests)
  * ${renderLicenseLink(data.license)}
  
  ### Description
  ${data.description}
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ### Contribution
  ${data.contributing}
  ### Test Instructions
  ${data.tests}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

