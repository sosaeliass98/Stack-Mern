require('dotenv').config();
const express = require('express')

const app = express();

app.get('/hello/:user', (req,res) => {
    console.log(typeof req.params.user)
    res.send(`Hola ${req.params.user.toUpperCase()}`)
})

app.get('/add/:x/:y', (req,res) => {
    console.log(req.params.x)
    console.log(req.params.y)

    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)

    /* const result = parseInt(req.params.x)+parseInt(req.params.y);
    res.send(`Result: ${result}`) */
})

app.get('/users/:username/photo', (req,res) => {
    if (req.params.username === "elias") {
        return res.sendFile('files/myFile.txt', {
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso')
})

app.get('/nombre/:nombre/age/:age', (req,res) => {
    res.send(`El usuario se llama ${req.params.nombre} y tiene ${parseInt(req.params.age)} años`)
})

app.get('/', (req,res) => {
    res.send('Bienvenido')
})

app.listen(process.env.PORT || 5000);
console.log(`Server On Port: ${process.env.PORT || 5000}`)