const generateReadme = () => {
  "../README_test.md",
    `# ${res.title}
## Description
${res.about}

#### Author(s)
![user's avatar](${avatarUrl})<br>
user: [${userName}](${response.html_url}) email: ${res.email}

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
![license type](https://img.shields.io/badge/LicenseUsed-${res.license}-yellow)`,
    (error) => {
      if (error) {
        console.log(error);
      }
      console.log("File Created");
    };
};

module.exports = {
  generateReadme,
};
