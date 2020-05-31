const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const promptQA = require("./promptQA");
// const genReadme = require("./readmeTemp");

inquirer.prompt(promptQA).then(function ({ username }) {
  const searchUrl = `https://api.github.com/users/${username}`;
  // var userEmail = { email };

  axios.get(searchUrl).then(function (res) {
    var avatarUrl = res.data.avatar_url;
    var username = res.data.login;
    var Url = res.data.html_url;
    var repo = res.data.repos_url;

    console.log(
      // res.title,
      // res.about,
      avatarUrl,
      username,
      Url,
      repo
      // userEmail,
      // res.install,
      // res.usage
      // res.contributor,
      // res.contributorRes,
      // license
    );
  });
});
