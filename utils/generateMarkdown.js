// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  // If there is no license, return an empty string
  return "";
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `Application covered under the ${license} license.`;
  }
  // If there is no license, return an empty string
  return "";
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
* Click on my GitHub username to visit my profile: [${data.username}](https://github.com/${data.username}/)
* If you have more questions please email me:
${data.email}
## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
