const questions = [
  {
    type: "input",
    name: "email",
    message: "What is your GitHub EMAIL",
  },
  {
    type: "input",
    name: "title",
    message: "What is the Project's TITLE?",
  },
  {
    type: "input",
    name: "about",
    message: "Can you describe what this project is ABOUT?",
  },
  {
    type: "input",
    name: "install",
    message: "How is this project installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the **INTENT** use of this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which License are you using?",
    choices: [
      "GNU GPLv3",
      "Mozilla Public License 2.0",
      "Apache 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "None",
    ],
  },
  {
    type: "confirm",
    name: "contributor",
    message: "Did any other else work on this Project?",
  },
  {
    type: "input",
    message: "Enter NAMES of all Contributors:",
    name: "contributorRes",
    when: (answers) => answers.contributor === true,
  },
];

module.exports = questions;
