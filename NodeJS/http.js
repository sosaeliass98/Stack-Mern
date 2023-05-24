//A partir de este modulo se crea la aplicación de servidor


//Tenemos que crear un servidor capaz de enviar y recibir peticiones
const http = require('http')
const port = 4000

const server = http.createServer((request, response) => {

    console.log(request.url)

    if(request.url == '/'){
        response.write('Welcome to the server')
        return response.end()
    }

    if(request.url == "/about"){
        response.write('Welcome to the About Site')
        //En JS escribir un return equivale a terminar la ejecucion de la función
        return response.end()
    }

    response.write(`
    <h1>Not Found</h1>
    <p>Esta pagina no se pudo encontrar</p>
    <a href="/">Go to the Home Page</a>
    `)
    response.end()
})
server.listen(port)

console.log(`Listening in ${port} port`)