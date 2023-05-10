const usersTable = [
  { username: 'hello@world.com' },
  { username: 'test@user.com' },
  { username: 'email@domain.com' },
];
let renderSuccess = () => {
  document.getElementById('success-message').hidden = false;
};
let renderEmailTakenError = () => {
  document.getElementById('taken-error-message').hidden = false;
};
let renderEmailEmptyError = () => {
  document.getElementById('empty-error-message').hidden = false;
};
let resetMessage = () => {
  document.getElementById('success-message').hidden = true;
  document.getElementById('taken-error-message').hidden = true;
  document.getElementById('empty-error-message').hidden = true;
};

addEventListener('submit', (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById('email').value;

  if (!email || email.length === 0) renderEmailEmptyError();
  else if (usersTable.some((user) => user.username === email))
    renderEmailTakenError();
  else renderSuccess();
});

let toggleNav = () => {
  var nav = document.getElementById('mobile-nav');

  if (nav.className.indexOf('show') == -1) {
    nav.className += ' show';
  } else {
    nav.className = nav.className.replace(' show', '');
  }
};
