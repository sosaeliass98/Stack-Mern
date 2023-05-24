require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/profile', (req,res) => {
    res.send(`Profile Page`)
})

// Puedo tener un next()
app.get('/about', (req,res) => {
    res.send('About Page')
})

// Un middleware debe contar con req,res y next
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`)
    next()
})


app.use((req, res, next) => {
    if (req.query.login === 'sosaeliass98') {
        next()
    } else {
        res.send('No Autorizado')
    }
    next()
})

app.get('/dashboard', (req,res) => {
    res.send('Dashboard Page')
})


app.listen(process.env.PORT || 5000)
console.log(`Server On Port: ${process.env.PORT || 5000}`)