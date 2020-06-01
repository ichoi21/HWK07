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
        res.title,
        "\n" + res.about,
        "\n" + avatarUrl,
        "\n" + username,
        "\n" + Url,
        "\n" + repo,
        "\n" + res.email,
        "\n" + res.install,
        "\n" + res.usage,
        "\n" + res.contributor,
        "\n" + res.contributorRes,
        "\n" + res.license
      );
      fs.writeFile(
        "../README_test.md",
        `# ${res.title}
    ## Description
    ${res.about}

    #### Author(s)
    ![user's avatar](${avatarUrl})<br>
    user: [${username}](${Url}) | email: ${res.email} | repos: [Click Here}(${repo})

    ## Contents
    - How to install
    - How to use
    - Contributor(s) (if applicable)

    ## How to install
    Perform the following:
    ${res.install}

    ## Intended Usage
    ${res.usage}

    ## Contributors
    ${res.contributorRes}

    ## License
    ![license type](https://img.shields.io/badge/LicenseUsed-${res.license}-${res.color}`,
        (error) => {
          if (error) {
            console.log(error);
          }
          console.log("Readme Created!");
        }
      );
    });
  });
});
