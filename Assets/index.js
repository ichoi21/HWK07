const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const promptQA = require("./promptQA");
const genReadme = require("./readmeTemp");

// function writeToFile(fileName, data) {}

// function init() {}

// init();

// module.exports = {
//   promptUser,
// };

inquirer.prompt(promptQA).then(function ({ username }) {
  const searchUrl = `https://api.github.com/users/${username}`;

  axios.get(searchUrl).then(function (response) {
    var avatarUrl = response.avatar_url;
    var userName = response.email;
    var userlink = response.html_url;

    inquirer.prompt(promptQA).then(function (res) {
      if (res.contributorRes === "undefined") {
        res.contributorRes = "None";
      }
      console.log(
        res.title,
        res.about,
        res.install,
        res.usage,
        res.contributor,
        res.contributorRes,
        res.license
      );
      fs.writeFile(genReadme);
    });
  });
});
