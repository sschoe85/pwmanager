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
    try{
    const passwordsJSON = await getPasswords();
    const passwords = JSON.parse(passwordsJSON);
    console.log("Your password is: " + passwords[answers.key]);
    }
    catch(error){
      console.log(error);
    }
  } else {
    console.log("wrong password");
  }
});
