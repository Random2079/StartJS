const stringChanger = (str) =>{ 
    let result = ''
    let letters = ['а','е','ё','и','о','у','ы','э','я']

    for (let i = 0; i < str.lenght; i++){
        if(letters.includes(str[i])){
            result += str[i].toUpperCase()
        }else{
            result += str[i].toLowerCase()
        }
    }
    return result
}


console.log(stringChanger('Йоу йоу йоу'))