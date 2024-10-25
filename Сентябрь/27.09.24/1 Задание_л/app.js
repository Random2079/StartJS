const changeTextButton = document.getElementById("change-text-btn")

changeTextButton.addEventListener('click', () => {
    const check = 'совершенно'; // Тут просто проверяю что можно вставить обычный текст в innerHTML;
    document.getElementById("text").innerHTML= `
    <div> Новый ${check} текст </div>`
})