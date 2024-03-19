const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { username: 'hello@world.com' },
  { username: 'test@user.com' },
  { username: 'email@domain.com' },
]
let renderSuccess = () => {
  document.getElementById('success-message').hidden = false
}
let renderEmailTakenError = () => {
  document.getElementById('taken-error-message').hidden = false
}
let renderEmailEmptyError = () => {
  document.getElementById('empty-error-message').hidden = false
}
let resetMessage = () => {
  document.getElementById('success-message').hidden = true
  document.getElementById('taken-error-message').hidden = true
  document.getElementById('empty-error-message').hidden = true
}

addEventListener('submit', (event) => {
  event.preventDefault()
  resetMessage()

  let email = document.getElementById('email').value

  // TODO: Show Correct Status Messages on Signup Form
  const emailExists = usersTable.find((user) => user.username === email)

  if (email && !emailExists) {
    // 1. successful signup
    renderSuccess()
  } else if (email === '') {
    // 2. empty email
    renderEmailEmptyError()
  } else if (emailExists) {
    // 3. taken email
    renderEmailTakenError()
  }
  // 4. repeat email
})

let toggleNav = () => {
  var nav = document.getElementById('mobile-nav')
  if (nav.className.indexOf('show') == -1) {
    nav.className += ' show'
  } else {
    nav.className = nav.className.replace(' show', '')
  }
}
