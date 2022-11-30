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
    if (email === "") {
        renderEmailEmptyError();
        return;
    }
    const users = [];

    for (let i = 0; i < usersTable.length; i++) {
        users.push(usersTable[i].username);
    }

    if (users.includes(email)) {
        renderEmailTakenError();
    } else {
        usersTable.push({ username: email });
        renderSuccess();
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
