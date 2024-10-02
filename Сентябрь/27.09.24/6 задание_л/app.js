const input_text = document.getElementById("live-input")
const text = document.getElementById("display-text")

input_text.addEventListener('input', () => {
    text.textContent = input_text.value
})


