const add_item_btn = document.getElementById('add-item')

const text_input = document.getElementById('item-input')

const item_list = document.getElementById('item-list')


add_item_btn.addEventListener('click', () => {
    const new_item = document.createElement('li')
    let input_value = text_input.value.trim()
    if (input_value === ""){
        return 0
    }else{
        new_item.textContent = text_input.value

        item_list.appendChild(new_item)
        text_input.value = ''
    }
})