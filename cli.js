const inquirer = require("inquirer");
const fs = require("fs").promises;

const masterPassword = [
  {
    type: "password",
    name: "password",
    message: "Please enter your master password",
  },
];

const userInput = [
  {
    type: "input",
    name: "userInput",
    message: "Please enter 'write' oder 'read'",
  },
];
function getReadOrWrite(){
inquirer.prompt(userInput).then(async (answers) => {
  if (answers.userInput === "read") {
    try {
      const passwordsJSON = await getPasswords();
      const passwords = JSON.parse(passwordsJSON);
      console.log("Your password is: " + passwords);
    } catch (error) {
      console.log(error);
    }
  }
  if (answers.userInput === "write"){
    
  }
  else{
    console.log("Error: 'read' oder 'write' are the only values accepted");
  }
});
}
async function getPasswords() {
  const pwFile = await fs.readFile("./passwords.json", "utf8");
  return pwFile;
}

function askForMasterPassword(){
  inquirer.prompt(masterPassword).then(async (answers) => {
    if (answers.password === "master") {
      getReadOrWrite();
    } else {
      console.log("wrong password");
    }
  });
}

askForMasterPassword();