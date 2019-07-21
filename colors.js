let currentColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'); // outputs current hexcode color to console
console.log(currentColor);

function makeGreen() {
    document.documentElement.style.setProperty('--main-bg-color', '#8EBA81');
}

function makeOrange() {
    document.documentElement.style.setProperty('--main-bg-color', 'orange');
}

function makePink() {
    document.documentElement.style.setProperty('--main-bg-color', 'pink');
}

function makePurple() {
    document.documentElement.style.setProperty('--main-bg-color', 'purple');
}
