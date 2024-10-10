const initialAmount = document.getElementById("initialAmount")
const interestRate = document.getElementById("interestRate")
const years = document.getElementById("years")

const calculateSavings = (initialAmount, interestRate, years) => {
    initialAmount = initialAmount + (initialAmount / 100) * (interestRate * years)
    if (initialAmount === 0) return
    document.getElementById("result").textContent = `Your Initial Amount is ${initialAmount}`
}

const button = document.getElementById("calculateButton")
button.addEventListener('click', () => {
    calculateSavings(Number(initialAmount.value), Number(interestRate.value), Number(years.value))
})

const header = document.getElementById('header')
const changeThemeButton = document.getElementById("themeToggleButton")
changeThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode-headear')
})

// const changeThemeHeadear = document.getElementById("header")
// changeThemeHeadear.addEventListener('click', () => {
//     document.header.classList.toggle('dark-mode-headear')
// })