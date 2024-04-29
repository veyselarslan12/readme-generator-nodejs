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
function generateMarkdown(title, github, email, description, installation, usage, contribution, test, license) {
  return `
  # ${title}
  ## Licence
  * ${license}
  ## Description
  * ${description}
  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Licence](#licence)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  ## Installation
  * ${installation}
  ## Usage
  $ ${usage}
  ## Licence
  * ${license}
  ## Contributing Guidelines
  * ${contribution}
  ## Test Instructions
  * ${test}
  ## Questions
  * Here is the link to my [GitHub](https://github.com/${github}) profile.
  * How to reach me with additional questions? Here is my [email](${email}) address.

`;
}

module.exports = generateMarkdown;

// license links
// MIT licence
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Apache 2.0
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// boost 
// [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// ISC
// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
// IPL-1.0 
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
// MPL-2.0
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// ODbL
// [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
// unlicence
// [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
// PDDL
// [![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)


