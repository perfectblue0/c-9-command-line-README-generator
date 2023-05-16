// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  // If there is no license, return an empty string
  return "";
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n[License](#license)\n`
  }
  // If there is no license, return an empty string
  return "";
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
        Licensed under the ${license} license.`;
  }
  // If there is no license, return an empty string
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
