const text_input = document.getElementById('text-input')

const count_char = document.getElementById('char-count')

text_input.addEventListener('input', () => {
    count_char.textContent = text_input.value.length
})