const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const { app, BrowserWindow } = require("electron");
const open = require("open");
const promptQA = require("./promptQA");
const htmlTemplate = require("./readmeTemp");

function writeToFile(fileName, data) {}

function init() {}

init();

module.exports = {
  promptUser,
};
