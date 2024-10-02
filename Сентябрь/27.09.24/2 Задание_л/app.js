const changeTextButton = document.getElementById("change-bg-btn")

changeTextButton.addEventListener('click', () => {
    // document.body.style.backgroundColor = 'black';
    document.body.classList.toggle('dark-mode')
})
