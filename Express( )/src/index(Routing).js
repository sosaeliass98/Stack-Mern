require('dotenv').config()
const express = require('express')

// Inicialización de la app Express
const app = express()

app.get('/', (req,res) => {
    // En lugar de enviar END que no da mucha informacion
    /* res.send('Hello World!') */

    // Puedo utilizar SEND, de Express, que le da mucha mas info al cliente
    res.send('Hello World!')
})

app.get('/about', (req,res) => {
    res.send('About Page')
})

app.get('/login', (req,res) => {
    res.send('Login Page')
})

// Esta funcion define que al visitar una ruta inex
//Entonces envia un mensaje personalizado
app.use((req,res) => {
    res.status(404).send('Pagina no encontrada')
})

// 
app.listen(process.env.PORT || 4000)
console.log(`Server On Port: ${process.env.PORT || 4000}`)