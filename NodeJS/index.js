/* let username = 'Elias'
let age = 24
let hasHobbies = true
let points = [20, 30, 40]

if (age >= 18) {
    console.log('You are a adult')
} else {
    console.log('You are a child')
}

const names = ['Elías', 'Claudio', 'Ester']

for (let i=0; i<names.length; i++){
    console.log(names[i]);
} */

function ShowUserInfo(userName, userAge) {
    return `The Username is ${userName}, the user is ${userAge} years old`
}

console.log(ShowUserInfo('Elías',24));