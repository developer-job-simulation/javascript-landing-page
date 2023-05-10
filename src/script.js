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

  console.log(email);

  if (!email || email.length === 0) {
    renderEmailEmptyError();
  } else if (usersTable.some((user) => user.username === email)) {
    renderEmailTakenError();
  } else {
    renderSuccess();
    usersTable.push({ username: email });
  }
});

// var nav = document.getElementById('mobile-nav');
// console.log(nav);

// nav.addEventListener('change', (event) => {
//   event.preventDefault();

//   console.log('HERE!!!');

//   let signupEl = document.getElementById('nav-signup');
//   let challengesEl = document.getElementById('nav-challenges');

//   console.log(signupEl);
//   console.log(challengesEl);
// });

const signupEl = document.getElementById('nav-signup');
const challengesEl = document.getElementById('nav-challenges');

// console.log(signupEl);
// console.log(challengesEl);
const mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    signupEl.classList.add('hide');
    challengesEl.classList.add('hide');
    console.log(signupEl.classList);
    console.log(challengesEl.classList);
  } else {
    signupEl.classList.remove('hide');
    challengesEl.classList.remove('hide');
    console.log(signupEl.classList);
    console.log(challengesEl.classList);
  }
}

mql.addEventListener('change', screenTest);

let toggleNav = () => {
  var nav = document.getElementById('mobile-nav');

  // console.log(nav);

  if (nav.className.indexOf('show') == -1) {
    nav.className += ' show';
  } else {
    nav.className = nav.className.replace(' show', '');
  }
};
