const red_btn = document.getElementById("red-btn");
const green_btn = document.getElementById("green-btn");
const blue_btn = document.getElementById("blue-btn");

const text = document.getElementById("colored-text");

red_btn.addEventListener('click', () => {
    text.style.color = "red";
})

green_btn.addEventListener('click', () => {
    text.style.color = "green";
})

blue_btn.addEventListener('click', () => {
    text.style.color = "blue";
})
