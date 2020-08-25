const inquirer = require("inquirer");
const { getPasswords, setPassword } = require("./passwords");

const masterPasswordGet = [
  {
    type: "password",
    name: "password",
    message: "Please enter your master password",
  },
];

const readOrWrite = [
  {
    type: "input",
    name: "userInput",
    message: "Please enter 'write' oder 'read'",
  },
];

const newPasswordSet = [
  {
    type: "input",
    name: "key",
    message: "Please enter password type",
  },
  { type: "input", name: "password", message: "Please enter password" },
];

function askForMasterPassword() {
  inquirer.prompt(masterPasswordGet).then(async (answers) => {
    if (answers.password === "master") {
      readOrWriteFile();
    } else {
      console.log("wrong password");
    }
  });
}

function readOrWriteFile() {
  inquirer.prompt(readOrWrite).then(async (answers) => {
    if (answers.userInput === "read") {
      try {
        const passwordsJSON = await getPasswords();
        const passwords = JSON.parse(passwordsJSON);
        console.log("Your password is: " + passwords.wifi);
      } catch (error) {
        console.log(error);
      }
    } else if (answers.userInput === "write") {
      inquirer.prompt(newPasswordSet).then(async(answers)=>{
        await setPassword(answers.key, answers.password);

      })
    } else {
      console.log("Error: 'read' oder 'write' are the only values accepted");
    }
  });
}

exports.readOrWriteFile = readOrWriteFile;
exports.askForMasterPassword = askForMasterPassword;
