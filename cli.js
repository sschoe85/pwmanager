const inquirer = require("inquirer");

const myPassword = [
  {
    type: "password",
    name: "mypw",
    message: "Please enter your password",
  },
];

inquirer.prompt(myPassword).then((pw) => {
  console.log(`Thank you, you will be hacked!`);
});
