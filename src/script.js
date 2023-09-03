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

let lastSubmittedEmail = null; // Initialize a variable to store the last successfully submitted email

addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById("email").value;

  // TODO: Show Correct Status Messages on Signup Form
  // 1. successful signup
  // 2. empty email
  // 3. taken email
  // 4. repeat email

  // 2. Check if the email is empty
  if (email.trim() === "") {
    renderEmailEmptyError();
  } else {
      // 3. Check if the email is already taken
      if (usersTable.some((user) => user.username === email)) {
        renderEmailTakenError();
        lastTakenEmail = email; // Update the last email that triggered "already taken" error
      } else {

                 // 4. Check if the email is the same as the last email that triggered "already taken" error (repeat email)
                 if (email === lastSubmittedEmail) 
                 renderEmailTakenError();

                 else{
        // 1. If not empty, not taken, and not a repeat, it's a successful signup
        renderSuccess();
        lastSubmittedEmail = email; // Update the last successfully submitted email
        
                 }
 
         
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






