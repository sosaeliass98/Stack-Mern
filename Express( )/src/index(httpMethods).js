require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res) => {
    //Validar datos
    //Consultar a base de datos
    //Procesar datos

    res.send('Bienvenido')
})

app.get('/products', (req,res) => {
    res.send('Lista de productos')
})

app.post('/products', (req,res) => {
    res.send('Creando Productos')
})

app.put('/products', (req,res) => {
    res.send('Actualizando Productos')
})

app.delete('/products', (req,res) => {
    res.send('Eliminando Productos')
})

app.patch('/products', (req,res) => {
    res.send('Actualizando una parte de un producto')
})


app.listen(process.env.PORT || 4000)
console.log(`Server On Port: ${process.env.PORT || 4000}`)