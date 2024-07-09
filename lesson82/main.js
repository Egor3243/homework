console.log('Задание №1')

function nameUser(name) {

    return ('Hello ' + [name])
}

const result = nameUser('Egor')

console.log(result)


console.log('Задание № 2')

const number = [5, 7, 10, 12, 20]

function checkForNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number > 10) {
            return `The number ${number} suits us`
        }
        return `The wrong number`
    }
}

console.log(checkForNumber(number, 12))

console.log('Задание № 3')

function calculator(firstNumber, secondNumber, operation){
    if (operation == '+') {
        return firstNumber + secondNumber
    }
    if (operation == '-') {
        return firstNumber - secondNumber
    }
    if (operation == '*') {
        return firstNumber * secondNumber
    }
    if (operation == '/') {
        return firstNumber / secondNumber
    }
}

const answer = calculator(1, 2, '/')

console.log(answer)