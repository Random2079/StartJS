window.onload = () => {
    let input = document.querySelector('#input');
    input.oninput = function() {
        let value = this.value.toLowerCase();
        list = document.querySelectorAll('.ul li')

        if(value != ''){
            list.forEach(element => {
                if(element.innerText.search(value) == -1){
                    element.classList.add('hide')
                }
            }); 
        } else {
            list.forEach(element => {
                element.classList.remove('hide');
            });
        }
    }
}

