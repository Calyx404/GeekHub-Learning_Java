const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// back to start page

function goBack() {
    window.open("/Start.html", '_self');
};

// scroll reveal

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 3000,
    delay: 3000
});

ScrollReveal().reveal('.login-popup', { origin: 'bottom'});

// show hide password

let password = document.getElementById('password');
let togglepassword = document.getElementById('toggle');

function showHide() {
    if (password.type == 'pasword') {
        password.setAttribute('type', 'text');
        togglepassword.classList.add('hide');
    }
    else {
        password.setAttribute('type', 'password');
        togglepassword.classList.remove('hide');
    }
}

// log in authentication

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = document.getElementById("username").value;

    if(email && password || user && email && password) {
        window.location.assign("Main.html");
        alert("Login Successfully ");
    }

    else {
        alert("Missing information ");
        return;
    }
}

// loader fade in-out

window.addEventListener("load", () => {
    const loader = document.querySelector(".container")

    loader.classList.add("container--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});