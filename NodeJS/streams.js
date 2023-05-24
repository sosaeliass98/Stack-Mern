/* const {writeFile} = require('fs/promises')

const createBigFile = async () => {
    await writeFile('./data/BigFile.txt', 'Hello World!'.repeat(10000))
}



createBigFile() */

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt', {
    encoding: 'utf-8'
})

// Chunk lo que hace es mostrar porciones del archivo
// Chunk es una palabra reservada, pero no es una regla
stream.on('data',(chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Terminé de leer el archivo')
})

stream.on('error', () => {
    console.log(error)
})
