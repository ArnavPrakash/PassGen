const generatePasswordButton = document.getElementById('generate-password');
const passwordLengthInput = document.getElementById('password-length');
const passwordTextarea = document.getElementById('password');

generatePasswordButton.addEventListener('click', () => {
  const passwordLength = parseInt(passwordLengthInput.value, 10);
  
  if (isNaN(passwordLength)) {
    passwordTextarea.value = 'Please enter a valid password length.';
    return;
  }
  
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
  let password = '';
  
  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * characters.length);
    password += characters[index];
  }
  
  passwordTextarea.value = password;
});
  