require('dotenv').config();
const express = require('express');

const app = express();


// Si a la URL le asigno una consulta y le asigno el nombre
// de una variable, puedo hacer una consulta
//EJ: hhtp://localhost:3000/index?search=lista
// http://localhost:3000/?page=2
app.get('/search', (req,res) => {
    if (req.query.q === 'Javascript') {
        res.send('Lista de Libros de JavaScript')
    } else {
        res.send('Pagina Normal')
    }
})

app.get('/', (req,res) => {
    console.log(req.query.user)
    res.send('')
})

app.listen(process.env.PORT || 5000)
console.log(`Server On Port: ${process.env.PORT || 5000}`)