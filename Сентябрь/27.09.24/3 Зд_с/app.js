const add_item_btn = document.getElementById('add-item')

const text_input = document.getElementById('item-input')

const item_list = document.getElementById('item-list')


add_item_btn.addEventListener('click', () => {
    const new_item = document.createElement('li')
    // let input_value = text_input.value.trim() Типа легкас версия
    let input_value = MyTrim(text_input.value)
    console.log(input_value)
    if (input_value === ""){
        return 0
    }else{
        new_item.textContent = text_input.value

        item_list.appendChild(new_item)
        text_input.value = ''
    }
    new_item.addEventListener('click', () =>{
        new_item.remove()
    })
})

function MyTrim (str) {
    while (str[0] === " "){
        str = str.substring(1)
    }
    while (str[str.length - 1] === " "){
        str = str.substring(0,str.length - 1)
    }
    return str
}