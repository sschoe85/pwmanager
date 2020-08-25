const fs = require("fs").promises;

async function setPassword(key, value) {
  const pwFile = await fs.readFile("./passwords.json", "utf8");
  const passwords = JSON.parse(pwFile);
  passwords[key] = value;
  const newPasswordsJSON = JSON.stringify(passwords, null, 2);
  await fs.writeFile("./passwords.json", newPasswordsJSON);
}

async function getPasswords() {
  const pwFile = await fs.readFile("./passwords.json", "utf8");
  return pwFile;
}
exports.setPassword = setPassword;
exports.getPasswords = getPasswords;
