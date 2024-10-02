const changeTextButton = document.getElementById("change-text-btn")

changeTextButton.addEventListener('click', () => {
    document.getElementById("text").innerHTML= `
    <style> div { 
    width: auto
    }</style>
    <div> Новый Текст </div>`
})