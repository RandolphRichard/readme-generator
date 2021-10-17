//import external data
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateRead = require("./utils/generateRead");
//end imports

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Apply License Badge?",
    choices: [
      new inquirer.Separator(),
      "MIT",
      new inquirer.Separator(),
      "MirOS",
      new inquirer.Separator(),
      "0BSD",
      new inquirer.Separator(),
    ],
  },
  {
    type: "input",
    name: "description",
    message: "In simple words, talk about your project.",
  },

  {
    type: "input",
    name: "installationSteps",
    message:
      "Guide us through on how to install your project? Give us step-by-step description of how to get it running, use a comma between each steps. i.e:npm install inquirer,",
  },

  {
    type: "input",
    name: "test",
    message: "What is the command to test the project?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this project?",
  },
];
// end array of questions for user

// function to generate readMe
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(
      "ReadMe.md",
      generateRead({
        ...answers,
      })
    );
  });
}
//end function to generate Readme

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// end function to write README file

// function call to initialize program
init();
// end function call to initialize program