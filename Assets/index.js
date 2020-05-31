const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const promptQA = require("./promptQA");
// const genReadme = require("./readmeTemp");

inquirer.prompt(promptQA).then(function ({ userName }) {
  const searchUrl = `https://api.github.com/users/${userName}`;

  axios.get(searchUrl).then(function (res) {
    var avatarUrl = res.data.avatar_url;
    var Url = res.data.avatar_url;

    console.log(
      res.title,
      res.about,
      avatarUrl,
      userName,
      res.data.html_link,
      // email,
      res.install,
      res.usage
      // res.contributor,
      // res.contributorRes,
      // license
    );
  });
});
