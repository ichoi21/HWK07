# 07 Node.js & ES6+: Good README Generator

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

```
AS A developer
I WANT a README generator
SO THAT I can easily put together a good README for a new project
```

Refer to the [Good README guide](##).

## Acceptance Criteria & Requirement

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their email and profile image. They will then be prompted with questions about their project.

The README will be populated with the following:

- At least one badge
- Project title
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
  - User GitHub profile picture
  - User GitHub email

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

### Minimum Requirements

- Functional, deployed application.
- GitHub repository with a unique name and a README describing project.
- The generated README includes a bio image from the user's GitHub profile.
- The generated README includes the user's email.
- The generated README includes the following sections:

  - Title
  - Description
  - Table of Contents
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - Questions

- The generated README includes 1 badge that's specific to the repository.

```
GIVEN the developer has a GitHub profile and a repository
WHEN prompted for the developer's GitHub username and repo specific information
THEN a README for the repo is generated
```

### Submission on BCS

- An animated GIF demonstrating the app functionality
- A generated README.md file for a project repo.
- The URL of the GitHub repository

---

### Narrative

- Initial Setup
- Added JS files, created useing module.exports.
- requires axios, inquirer additionally to be installed.
- setup gitignore
- Questions prompted to set up with README format template
- API success with GitHub
- module.exports function with Prompt1 + PromptQA after understanding code was unable to read specifics.
- Added writeFile to export answers to .md file within.
- Added GIF to demonstrate node index.js
