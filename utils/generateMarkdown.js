// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Licence
  * ${data.licence}
  ## Description
  * ${data.description}
  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Licence](#licence)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  ## Installation
  * ${data.installation}
  ## Usage
  $ ${data.usage}
  ## Licence
  * ${data.licence}
  ## Contributing Guidelines
  * ${data.contribution}
  ## Test Instructions
  * ${data.test}
  ## Questions
  * Here is the link to my [GitHub](https://github.com/${data.github}) profile.
  * How to reach me with additional questions? Here is my [email](${email}) address.

`;
}

module.exports = generateMarkdown;
