const generatePasswordButton = document.getElementById("generate-password");
const passwordLengthInput = document.getElementById("password-length");
const passwordTextarea = document.getElementById("password");
const lowerCaseEl = document.getElementById("lowercase");
const upperCaseEl = document.getElementById("uppercase");
const numberCaseEl = document.getElementById("numberCase");
const symbolEl = document.getElementById("symbol");

generatePasswordButton.addEventListener("click", () => {
  const passwordLength = parseInt(passwordLengthInput.value, 10);
  const hasLower = lowerCaseEl.checked;
  const hasUpper = upperCaseEl.checked;
  const hasNumber = numberCaseEl.checked;
  const hasSymbol = symbolEl.checked;

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_-+=";

  let characters = "";
  if (hasLower) {
    characters = characters + lower;
  }
  if (hasNumber) {
    characters = characters + number;
  }

  if (hasUpper) {
    characters = characters + upper;
  }

  if (hasSymbol) {
    characters = characters + symbol;
  }

  if (isNaN(passwordLength)) {
    passwordTextarea.value = "Please enter a valid password length.";
    return;
  }

  if (!characters) {
    passwordTextarea.value = "please check atleast one box";
    return;
  }
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(
      (crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) *
        characters.length
    );
    console.log(index);
    password += characters[index];
  }

  passwordTextarea.value = password;
});

// Get the copy button element
const copyButton = document.getElementById("copy-button");

// Add an event listener to the copy button
copyButton.addEventListener("click", function () {
  // Get the password element
  const passwordElement = document.getElementById("password");

  // Create a temporary input element
  const input = document.createElement("input");
  input.value = passwordElement.innerText;
  document.body.appendChild(input);

  // Select and copy the password to the clipboard
  input.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(input);

  // Show a confirmation message
  const confirmationMessage = document.getElementById("confirmation-message");
  confirmationMessage.style.display = "block";
  setTimeout(function () {
    confirmationMessage.style.display = "none";
  }, 3000);
});
