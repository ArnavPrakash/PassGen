document.addEventListener('DOMContentLoaded', function() {
    const generatePasswordButton = document.getElementById('generate-password');
    const passwordLengthInput = document.getElementById('password-length');
    const passwordTextarea = document.getElementById('password');
  
    generatePasswordButton.addEventListener('click', function() {
      const passwordLength = parseInt(passwordLengthInput.value);
      const password = generatePassword(passwordLength);
      passwordTextarea.value = password;
    });
  
    function generatePassword(length) {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,.<>?';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
  });
  