console.log('Задание №1,2')

const user = {
    Egor: {
        age: 21,
        height: '181 см',
        weight: '80 кг',
        city: 'Voronezh',
        sayHello(name){
            console.log(`Hello ${name}`)
        }
    }
}

console.log(user.Egor)

user.Egor.sayHello('Egor')

console.log('Задание №3')

const users = [
    {
        name: 'Fedor',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Viktor',
        age: 22,
        isAdmin: true
    },
    {
        name: 'Dima',
        age: 20,
        isAdmin: false
    }
]

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false ){
        const result = users[i].name
        console.log (result)
    }
}