const inquirer = require("inquirer");
const fs = require("fs").promises;
async function getPasswords() {
  const pwFile = await fs.readFile("./passwords.json", "utf8");
  return pwFile;
}

const myPassword = [
  {
    type: "password",
    name: "password",
    message: "Please enter your password",
  },
  {
    type: "input",
    name: "key",
    message: "Which password do you need?",
  },
];

inquirer.prompt(myPassword).then(async (answers) => {
  if (answers.password === "123") {
    const data = await getPasswords();
    console.log(data);
  } else {
    console.log("wrong password");
  }
});
