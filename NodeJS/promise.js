const { error } = require('console')
const {readFile} = require('fs/promises')
/* const {promisify} = require('util')

const readFilePromise = promisify(readFile)
 */
// Promise no debe instanciarse de ningun lado

/* const getText = (pathFile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err,data) => {
            if (err) {
                reject(err)
            }
        
            resolve(data)
        })
    })
} */

/* getText('./data/fourth.txt')
    .then((result) => console.log(result))
    .then(() => getText('./data/first.txt'))
    .then(result => console.log(result))
    .catch(error => console.log(error)) */

// async sirve para explicar que una funcion esta
// ejecutando codigo asincrono dentro de su contenido

// await es para indicar que esa funcion con codigo 
// asincrono va a tomar algo de tiempo


// La funcion debe indicar mediante async que ese codigo es asincrono

async function read() {
    try {
    
    const result = await readFile('./data/first.txt', 'utf-8')
//    throw new Error('Este es un error inesperado')
    const result2 = await readFile('./data/second.txt', 'utf-8')
    console.log(result)
    console.log(result2)
    } catch(error) {
        console.log(error)
    }
}

read()
