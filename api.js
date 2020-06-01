// $(document).ready(function () {
//   const API = "https://api.github.com/users/ichoi21";
//   getUser();

//   function getUser() {
//     $.ajax({
//       type: "GET",
//       url: API,
//       dataType: "json",
//     }).then(function (response) {
//       console.log(response);
//       $(".apii").append(
//         response.login + response.avatar_url + response.html_url
//       );
//     });
//   }
// });

var inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username",
  })
  .then(function ({ username }) {
    const searchUrl = `https://api.github.com/users/${username}`;

    axios.get(searchUrl).then(function (res) {
      var avatarUrl = res.data.avatar_url;
      var userEmail = res.data.email;

      if (userEmail === null) {
        userEmail = "Not Publicly Available";
      }
      inquirer.prompt().then(function (res) {
        if (res.contributorRes === "undefined") {
          res.contributorRes = "None";
        }
        console.log(
          res.title,
          res.desc,
          res.install,
          res.usage,
          res.license,
          res.contributorQuery,
          res.contributorRes
        );
        fs.writeFile(
          "readme.md",
          `![license type](https://img.shields.io/badge/License-${res.license}-yellow)<br>
  ![user's avatar](${avatarUrl})<br>
  email: ${userEmail}
  # ${res.title}
  ## Description
  ${res.desc}
  ***
  ## Contents
  - How to install
  - How to use
  - Contributors (if applicable)
  ***
  ## How to install
  ${res.install}
  ***
  ## Intended Usage
  ${res.usage}
  ***
  ## Contributors
  ${res.contributorRes}`,
          (error) => {
            if (error) {
              console.log(error);
            }
            console.log("File Created");
          }
        );
      });
    });
  });
