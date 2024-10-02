const item_list = document.getElementById('toggle-list')

const btn_hide_list = document.getElementById('toggle-button')

// item_list.forEach(item => {
//     item.addEventListener('mouseover', () =>{
//         item.style.background = 'wheat';
//     })
//     item.addEventListener('mouseout', () =>{
//         item.style.background = '';
//     })
// })

btn_hide_list.addEventListener('click', () => {
    if (item_list.style.display === 'none'){
        item_list.style.display = 'block'
        btn_hide_list.textContent = 'Скрыть'
    }else{
        item_list.style.display = 'none'
        btn_hide_list.textContent = 'показать'
    }
})
