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
function generateMarkdown(answers) {
  return `#${answers.title}
  ## Description 
  ${answers.description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributions](#Contributions)
  - [Test](#Test) 
  - [Questions](#Questions) 
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Contributions
  ${answers.contributions}
  ## Test
  ${answers.test}
  ## Questions
  Reach out to this email for questions:${answers.email}
  Github repository: [${answers.github}](https://github.com/${
    answers.github
  }/).


`;
}

module.exports = generateMarkdown;
