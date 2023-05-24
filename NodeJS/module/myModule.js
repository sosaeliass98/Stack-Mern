// No añadir al export es una forma de guardar el valor secreto de una variable
let mySecretVariable = 'xyz123'

const myWebAddress = "www.google.com";
const myNumber = 30
const myArray = [ 10, 20, 30]
const user = 'Elías'

// Distintas formas de poder exportar

/* const group = {
    myWebAddress: myWebAddress,
    myNumber: myNumber,
    myArray: myArray,
    user: user
}

module.exports = group */

/* module.exports = {
    myWebAddress,
    myNumber,
    myArray,
    user,
} */

module.exports.user = user
module.exports.number = myNumber
module.exports.myArray = myArray

module.exports = {
    myWebAddress: myWebAddress,
    myNumber: myNumber,
    myArray: myArray,
    user: user   
}