const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.write('Welcome to the server')
        return res.end()
    }

    if (req.url === '/about') {

        // Blocking Code
        // Usamos codigo asincrono para evitar esto
        /* for (let i = 0; i < 100000; i++){
            console.log(Math.random() * i)
        } */

        return res.end('About Page')
    }

    res.end('Not Found')
})

server.listen(3000)

console.log('Server on Port 3000')