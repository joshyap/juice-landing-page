// const contentBox = document.querySelector(".content-box");

// let root = document.documentElement;

// root.addEventListener("mousemove", e => {
//     root.style.setProperty('--mouse-x', e.clientX + "px");
//     root.style.setProperty('--mouse-y', e.clientY + "px");
// });

let currentColor = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color'); // outputs current hexcode color to console
console.log(currentColor);

function makeGreen() {
    // var elements = document.getElementsByClassName("content-box");
    // var singleNode = elements[0];
    // singleNode.style.backgroundColor = "#8EBA81";
    // console.log(singleNode.style);
    document.documentElement.style.setProperty('--main-bg-color', '#8EBA81');
}

function makeOrange() {
    // var elements = document.getElementsByClassName("content-box");
    // var singleNode = elements[0];
    // singleNode.style.backgroundColor = "orange";
    // console.log(singleNode.style);
    document.documentElement.style.setProperty('--main-bg-color', 'orange');
}

function makePink() {
    // var elements = document.getElementsByClassName("content-box");
    // var singleNode = elements[0];
    // singleNode.style.backgroundColor = "pink";
    // console.log(singleNode.style);
    document.documentElement.style.setProperty('--main-bg-color', 'pink');
}

function makePurple() {
    // var elements = document.getElementsByClassName("content-box");
    // var singleNode = elements[0];
    // singleNode.style.backgroundColor = "purple";
    // console.log(singleNode.style);
    document.documentElement.style.setProperty('--main-bg-color', 'purple');
}




// :root {
//     --main-bg-color: #8EBA81;
// }

