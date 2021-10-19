// function to generate template for README

function generateRead(answers) {
    return `
  ## Table of Contents: 
  - [Name](#project-name)
  - [License](#license)
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Test Command](#test-command)
  - [Github Username](#github-username)
  - [Email Address](#email-address)
  - [Contributors](#contributors)

  # Project Name:
  ${answers.name}

  ## License:
  [![License:${answers.license}](https://img.shields.io/badge/${answers.license}-License-green.svg)](https://opensource.org/licenses/${answers.license})
  
  ## Description:
  ${answers.description}

  ## Installation Instructions: 
  ${answers.installationSteps}
  
  ## Test Command: 
  To Run and test it, type: ( ${answers.test} )  into the terminal.
  
  ## Github Username: 
  You can review more projects on my Github at https://github.com/${answers.gitHub}
  
  ## Email Address:
  If you need to get a hold of me with additional questions you can reach me by email at ${answers.email}
  
  ## Contributors:
  ${answers.contributors}
  `;
  }
  
  module.exports = generateRead;