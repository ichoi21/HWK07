const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// const promptQA = require("./promptQA");
// const genReadme = require("./readmeTemp");

inquirer
  .prompt(
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub USERNAME?",
    },
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
      nane: "license",
      message: "Which License are you using?",
      choices: [
        "GNU GPLv3",
        "Mozilla Public License 2.0",
        "Apache 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "None",
      ],
    }
    // {
    //   type: "confirm",
    //   name: "contributor",
    //   message: "Did any other else work on this Project?",
    // },
    // {
    //   type: "input",
    //   message: "Enter NAMES of all Contributors:",
    //   name: "contributorRes",
    //   when: (answers) => answers.contributor === true,
    // }
  )
  .then(function ({ userName }) {
    const searchUrl = `https://api.github.com/users/${userName}`;

    axios.get(searchUrl).then(function (res) {
      var avatarUrl = res.avatar_url;

      console.log(
        res.avatar_url,
        res.title,
        res.about,
        avatarUrl,
        userName,
        res.html_link,
        email,
        res.install,
        res.usage,
        res.contributor,
        res.contributorRes,
        res.license
      );
    });
  });
