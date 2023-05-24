//Podremos utilizar metodos de FS para crear archivos leerlos, editarlos y eliminarlos

const fs = require('fs');

/* const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

// La palabra Sync es una forma de decirnos que la funciones se ejecutan de forma sincrona

//Crear un archivo utilizando fs
fs.writeFileSync('./data/tercero.txt', 'Este es un archivo creado con fs');

const title = ' Este contenido se ha agregado'

fs.writeFileSync('./data/cuarto.txt', title, {
    flag: 'a'
}); */

//La sinstaxis debe indicar que el codigo se va a ejecutar de forma asincrona

/* fs.readFile('./data/first.txt', function (error, data){
    console.log(error),
    console.log(data.toString())
})

 */
//Esta funcion se llama Callback

//Se llama callback porque se ejecuta despues de la tarea anterior
fs.readFile('./data/first.txt', (error, data) => {
    if(error){
        console.log(error)
    }
    
    console.log(data.toString())

    fs.readFile('./data/second.txt', (error, data) => {
        if(error){
            console.log(error)
        }
        
        console.log(data.toString())

        fs.writeFile('./data/newFile.txt', 'Archivo creado desde fs', (err, data) => {
            console.log(err),
            console.log(data)
        })
    })
})

// La forma de ejecutar codigo asincrono ejecuta una funcion y luego de que termine la operacion ejecuta la logica