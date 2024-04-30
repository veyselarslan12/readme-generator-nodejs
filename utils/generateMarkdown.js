// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "ISC":
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    case "Apache-2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "MPL-2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
    case "ODbL":
      return "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)";
    case "Boost":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
    case "IPL-1.0":
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
    case "Unlicense":
      return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
    case "PDDL":
      return "![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)";
    default:
      return " ";                  
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "Apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "MPL-2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "ODbL":
      return "https://opendatacommons.org/licenses/odbl/";
    case "Boost":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "IPL-1.0":
      return "https://opensource.org/licenses/IPL-1.0";
    case "Unlicense":
      return "http://unlicense.org/";
    case "PDDL":
      return "https://opendatacommons.org/licenses/pddl/";   
    default:
      return " ";                
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    return `## License
    \n${badge}\n
  This project is licensed under the [${license}](${link}) license.`
  }

}


// TODO: Create a function to generate markdown for README
function generateMarkdown({title, github, email, description, installation, usage, contribution, test, license, badge}) { console.log(badge)
  return `
  # ${title} ${renderLicenseBadge(license)}

  ## Description
  * ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Instructions](#instructions)
  * [Questions](#questions)
  
  ## Installation
  * ${installation}

  ## Usage
  * ${usage}
  
  ${renderLicenseSection(license)}

  ## Contribution
  * ${contribution}

  ## Instructions
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
// unlicense
// [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
// PDDL
// [![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)


