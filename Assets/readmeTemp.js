const generateReadme =
  ("../README_test.md",
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
    ![license type](https://img.shields.io/badge/LicenseUsed-${res.license}-${res.color}`);

module.exports = generateReadme;
