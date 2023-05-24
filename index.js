// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateLogo = require("./utils/generateLogo");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter the text for your logo:",
    filter(input) {
      return new Promise((resolve, reject) => {
        resolve(input.substring(0, 3));
      });
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color for the text:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color for the shape:",
  },
];

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const logo = generateLogo(answers);
    fs.writeFile("./examples/logo.svg", logo);
    console.log("Generated logo.svg");
  });
}

// Function call to initialize app
init();
