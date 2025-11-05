const themeButton = document.getElementById("themeButton");
// const wathThisVideoButton = document.getElementById("wathThisVideoButton");
// const homePageButton = document.getElementById("homePageButton");
const block = document.getElementById("block");

let counter = localStorage.getItem('visits') || 0;


themeButton.addEventListener('click', function() { // typing codes for one tag.
    document.body.classList.toggle('dark'); // changes the body's css to .dark css if it's not .dark css.
    themeButton.classList.toggle('darkButton'); // changes themeButton's css to .darkButton css if it's not .darkButton css.
    if (themeButton.textContent === 'Dark') { // changes the text of the button.(NOT this line. The if else do it.)
        themeButton.textContent = 'Light';
        document.div.classList.toggle('darkDiv');
    } else if (themeButton.textContent === 'Light') {
        themeButton.textContent = 'Dark';
    }
});

counter++;
localStorage.setItem('visits', counter);
document.getElementById('counter').textContent = "Visitors: " + counter;
