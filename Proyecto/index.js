require('dotenv').config();
const express = require('express');

const app = express();

app.listen(process.env.PORT || 5005 );
console.log(`Server on port: ${process.env.PORT || 5005}`);

app.get('/', (req,res) => {
    res.sendFile('./index.html', {
        root: __dirname
    }) 
})

app.get('/about', (req,res) => {
    res.send('Acerca de mi')
})

app.use((req,res) => {
    res.status(404).send('Pagina no encontrada')
})