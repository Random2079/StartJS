const cartProduct = document.querySelector('.product-card')

const nameFilm = document.querySelector('.name-film')
const dataFilm = document.querySelector('.data-film')
const budgetFilm = document.querySelector('.budget-film')

let allFilms = []

const getData = async (url) => {
    
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`error: ${response.status}`) 
        
        const data = await response.json()
        return data

    } catch(error){
        console.error("Ошибка получения данных",error)
        return []
    }

};

const displayMovies = (movies) => {
    const cartForm = document.querySelector('.products')

    cartForm.innerHTML = ''

    if (movies.length === 0){
        const message = document.createElement('div')
        message.textContent = "Фильмы не найдены"
        cartForm.appendChild(message)
        return 
    }

    movies.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('product-card')

        const title = document.createElement('h4')
        title.classList.add('name-film')
        title.textContent = item.title

        const date = document.createElement('i')
        date.classList.add('data-film')
        date.textContent = item.date === "" ? "Скоро в прокате": `Дата выхода: ${item.date}`

        const moneyFilm = document.createElement('i')
        moneyFilm.classList.add('budget-film')
        moneyFilm.textContent = item.box_office + " млн"

        card.appendChild(title)
        card.appendChild(date)
        card.appendChild(moneyFilm)

        cartForm.appendChild(card)

    });
}

const searchMovies = () => {
    const text = document.querySelector('.input_search').value.toLowerCase()
    const filteredMovies = allFilms.filter(film => {
        return film.title.toLowerCase().includes(text)
    //     // console.log(text,film.title.toLowerCase().includes(text))
    //     console.log(film.title.includes(text))
    })
    console.log(filteredMovies)

    
    displayMovies(filteredMovies)
}


const init = async () => {
    allFilms = await getData("https://e77628a02c7acdfe.mokky.dev/cringe_films")

    displayMovies(allFilms)

    document.querySelector('.input_search').addEventListener("input", searchMovies)

}

init()