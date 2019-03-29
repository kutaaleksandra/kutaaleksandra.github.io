const mainParagraph = document.querySelector('p.subtitle');
const txt = "Welcome to my personal website!";
const spanCursor = document.querySelector('.cursor');

let indexText = 0;
const time = 40;

const addLetter = () => {
    mainParagraph.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexTyping);
    }
}

const indexTyping = setInterval(addLetter, time);

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400);

const navBar = document.querySelector('i.menu');
const ul = document.querySelector('ul');

navBar.addEventListener('click', (e) => {
    ul.classList.toggle('active');
});

$("a").ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            })
        }
    })
});