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

  // TODO: Show Correct Status Messages on Signup Form
  
  
  // 2. empty email
  if (email.length == 0){
    renderEmailEmptyError();
    return;
  }
  // 3. taken email
  for(let i=0; i<usersTable.length; i++){
    if (usersTable[i].username == email){
      renderEmailTakenError();
      break;
    }
  }
  // 4. repeat email

  // 1. successful signup
  {
    let i=0;
    for(; i<usersTable.length; i++){
      if (usersTable[i].username == email){
        break;
      }
    }
    if (i == usersTable.length){
      renderSuccess();
      usersTable.push({username:email});
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
