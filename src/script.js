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
  
  //   if empty give error
  if (email.length === 0){
    renderEmailEmptyError();
    return null;
  }

  const user = usersTable.find(user => user.username === email);

  if (user){
    //   if taken already taken, repeat also same case
    renderEmailTakenError();
  }else{
    //   succesful signup where email doesnt exist and is correct, add user
    renderSuccess();
    usersTable.push({username: email});
  }

  // TODO: Show Correct Status Messages on Signup Form
  // 1. successful signup
  // 2. empty email
  // 3. taken email
  // 4. repeat email
});

let toggleNav = () => {
  var nav = document.getElementById("mobile-nav");
  console.log(nav.className)
  if (nav.className.indexOf("show") == -1) {
    nav.className += " show";
  } else {
    nav.className = nav.className.replace(" show", "");
  }
};
