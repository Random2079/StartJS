const count_click_btn = document.getElementById("click-btn");
const count_cliker = document.getElementById("click-count");

const countGenerator = () =>{
    let count = 0;
    return function () {
        return count ++;
    }
}

const generateCount = countGenerator();

count_click_btn.addEventListener('click', () => {
    return update()
})


function update(){
    count_cliker.innerHTML = generateCount();
}