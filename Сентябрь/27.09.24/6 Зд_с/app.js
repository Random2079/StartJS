const cycle_button = document.getElementById('cycle-button')
const cycle_text = ['Старт','Стоп','Рестарт']
let start_index = 0

cycle_button.addEventListener('click', () =>{
    start_index = (start_index + 1 ) % cycle_text.length
    cycle_button.textContent = cycle_text[start_index]
// (0 + 1) % 3 = 1 
// (1 + 1) % 3 = 2
// (2 + 1) % 3 = 0
})