const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const prompt1 = require("./prompt1");
const promptQA = require("./promptQA");
// const genReadme = require("./readmeTemp");

inquirer.prompt(prompt1).then(function ({ username }) {
  const searchUrl = `https://api.github.com/users/${username}`;

  axios.get(searchUrl).then(function (res) {
    var avatarUrl = res.data.avatar_url;
    var username = res.data.login;
    var Url = res.data.html_url;
    var repo = res.data.repos_url;

    inquirer.prompt(promptQA).then(function (res) {
      if (res.contributor === "undefined") {
        res.contributor = "None";
      }
      console.log(
        res.about,
        avatarUrl,
        username,
        Url,
        repo,
        res.email,
        res.install,
        res.usage,
        res.contributor,
        res.contributorRes,
        res.license
      );
    });
  });
});
