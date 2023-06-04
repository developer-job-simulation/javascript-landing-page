const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { username: "hello@world.com" },
  { username: "test@user.com" },
  { username: "email@domain.com" },
];
let renderSuccess = () => {
  document.getElementById("success-message").hidden = false;
};
let renderEmailTakenError = () => {
  document.getElementById("taken-error-message").hidden = false;
};
let renderEmailEmptyError = () => {
  document.getElementById("empty-error-message").hidden = false;
};
let resetMessage = () => {
  document.getElementById("success-message").hidden = true;
  document.getElementById("taken-error-message").hidden = true;
  document.getElementById("empty-error-message").hidden = true;
};

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;

  // Check if the email is empty, and if is, render empty error.
  if (!email) {
    renderEmailEmptyError();
  } else {
    // If it is not empty, check if already exists.
    // This is just a boolean flag.
    let emailExists = false;
    // Check if the email already existe in the usersTable array.
    for (const obj of usersTable) {
      if (obj.username === email) {
        // If the email exists, toggle flag and break cycle.
        emailExists = true;
        break;
      }
    }

    // If the email exists, render error.
    if (emailExists) {
      renderEmailTakenError();
    } else {
      // Otherwise, save the email to the usersTable array and render success.
      usersTable.push({ username: email });
      renderSuccess();
    }
  }
});

let toggleNav = () => {
  var nav = document.getElementById("mobile-nav");
  if (nav.className.indexOf("show") == -1) {
    nav.className += " show";
  } else {
    nav.className = nav.className.replace(" show", "");
  }
};
