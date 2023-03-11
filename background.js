function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]|;:<>,.?/~`";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }
  
  // Add an event listener to the browser action button
  chrome.action.onClicked.addListener(function() {
    const password = generatePassword(12); // generate a 12-character password
    console.log("Your new password is: " + password);
    // var views = chrome.extension.getViews({
    //   type: "popup"
    // });
    // for (var i = 0; i < views.length; i++) {
    //     views[i].document.getElementById('maintxt').innerHTML = "My Custom Value";
    // }
  });