require('dotenv').config()
const express = require('express')

const app = express()

//Primero creo el use, y no tiene nombre porque quiere decir que todas
//Las rutas lo utilizaran
app.use((req, res, next) => {
    console.log('Pasó por aquí')
    //La funcion next() hace que cuando se cumpla la funcion
    //Siga adelante
    next()
})

app.get('/profile', (req,res) => {
    res.send(`Route: ${req.url} Metodo: ${req.method}`)
})

app.get('/about', (req,res) => {
    res.send('About Page')
})

app.listen(process.env.PORT || 5000)
console.log(`Server On Port: ${process.env.PORT || 5000}`)