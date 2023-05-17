// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  // If there is no license, return an empty string
  return "";
}

// TODO: Create a function that returns the license link
/*function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n[License](#license)\n`
  }
  // If there is no license, return an empty string
  return "";
}
*/

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `Licensed covered under the ${license} license.`;
  }
  // If there is no license, return an empty string
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Click on my GitHub username to visit my profile:
* [${data.username}](https://github.com/${data.username}/)
If you have more questions please email me:
* ${data.email}
## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
