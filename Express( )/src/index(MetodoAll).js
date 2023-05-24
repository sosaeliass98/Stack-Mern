require('dotenv').config()
const express = require('express')

const app = express()

// El metodo All le indica a Express que la url funciona
// Con todos los metodos HTTP
app.all('/info', (req,res) => {
    res.send('Server Info')
})

app.listen(process.env.PORT || 5000)
console.log(`Server On Port ${process.env.PORT || 5000}`)