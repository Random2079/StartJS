const item_list = document.querySelectorAll('#hover-list li')

item_list.forEach(item => {
    item.addEventListener('mouseover', () =>{
        item.style.background = 'wheat';
    })
    item.addEventListener('mouseout', () =>{
        item.style.background = '';
    })
});
