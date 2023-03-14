const generatePasswordButton = document.getElementById("generate-password");
const history = document.getElementById("generate-history");
const passwordLengthInput = document.getElementById("password-length");
const passwordTextarea = document.getElementById("password");
const lowerCaseEl = document.getElementById("lowercase");
const upperCaseEl = document.getElementById("uppercase");
const numberCaseEl = document.getElementById("numberCase");
const symbolEl = document.getElementById("symbol");
var i = 0;
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
    // console.log(index);
    password += characters[index];
  }

  passwordTextarea.value = password;
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  setCookie(i, password, 5);
  i = i + 1;
  if (i > 5) {
    i = 0;
  }
});

history.addEventListener("click", () => {
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  for (var j = 0; j < 5; j++) {
    // history.value(getCookie(j));
    console.log(getCookie(j));
  }
});

const copyButton = document.getElementById("copy-button");
const confirmationMessage = document.getElementById("confirmation-message");

copyButton.addEventListener("click", () => {
  passwordTextarea.select();
  document.execCommand("copy");
  confirmationMessage.style.display = "block";
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 2000);
});
