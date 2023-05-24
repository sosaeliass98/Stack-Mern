// Metodologia a partir de NodeJS

/* const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) => {
    const read = fs.createReadStream('./src/index.html')
    read.pipe(res)
})

server.listen(3000)
console.log(`Server on port: ${3000}`) */
require('dotenv').config()

const express = require('express')

const app = express()

// La funcion (req,res) se denomina 'Request Handler'
app.get('/', (req,res) => {
    //sendFile me permite leer un archivo
    res.sendFile('./index.html', {
        // Esto indica de donde viene este archivo
        // Define la ruta completa del dispositivo hasta este proyecto
        root: __dirname
    })
})


app.listen(process.env.PORT || 4000)

console.log(`Server On Port ${process.env.PORT || 4000}`)