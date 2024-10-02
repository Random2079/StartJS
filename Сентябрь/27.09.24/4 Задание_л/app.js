const toggle_btn = document.getElementById("toggle-btn")
// const toggle_txt = document.getElementById("toggle-text")


toggle_btn.addEventListener('click', () => {
    document.getElementById("toggle-text").classList.toggle('hide')
})
