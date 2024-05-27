// loader fade in-out

window.addEventListener("load", () => {
    const loader = document.querySelector(".container")

    loader.classList.add("container--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

// navigation active link

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active');
};

list.forEach((item) => {
    item.addEventListener('click', activeLink)
});

// main

const tbtn = document.querySelectorAll(".navigation ul li");
const tab = document.querySelectorAll(".tabs");

function show(panelIndex) {
    tab.forEach(function(node) {
        node.style.display = "none";
    })

    tab[panelIndex].style.display = "block";
}

show(3);

// declearing html elements

const profile = document.querySelector('.profile-img');
const img = document.querySelector('#pfp');
const file = document.querySelector('#file');
const upload = document.querySelector('#uploadBtn');

// choose photo on pfp hover

profile.addEventListener('mouseenter', function() {
    upload.style.display = "block"
});

// hide choose photo on pfp unhover

profile.addEventListener('mouseleave', function() {
    upload.style.display = "none"
});

// choose photo

file.addEventListener('change', function() {
    const chosenFile = this.files[0];

    if(chosenFile) {
        const reader = new FileReader();

        reader.addEventListener('load', function() {
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(chosenFile);
    };
});

// default main

function defaultMain() {
    document.getElementById("logout").classList.remove('active');
    document.getElementById("learn").classList.toggle('active');
    show(2);
};

// logout: back to sign in

function goBack() {
    window.open("/Sign.html", '_self');
};