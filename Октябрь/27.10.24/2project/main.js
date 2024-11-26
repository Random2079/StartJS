window.onload = function() {
    const icon = document.querySelector('.sidebar__icon')

    const main = document.querySelector('.main')

    const main_content = document.querySelector('.main > .main__content')

    icon.onclick = function(){
        this.classList.toggle('change-icon')
        main.classList.toggle('main_bg') 
        main_content.classList.toggle('main__content_bg')
    };    

    let closeMenu = event => {
        let target = event.target;4        

        if(target.classList.contains('main_bg')){
            icon.classList.remove('change-icon')
            main.classList.remove('main_bg') 
            main_content.classList.remove('main__content_bg')
        }
    }


    main.addEventListener('click',closeMenu)
}

