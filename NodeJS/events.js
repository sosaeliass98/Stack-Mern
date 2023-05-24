const EventEmitter = require('events')

// new es la forma de crear objetos en Javascript
const customEmitter = new EventEmitter()

// Es importante crear primero el evento y luego emitirlo

// La funcion ON inicializa un evento
customEmitter.on('response', (data, secondData) => {
    console.log('Received')
    console.log(data)
    console.log(secondData)
})

//La funcion emit emite el evento
customEmitter.emit('response', 'Hello World', [1,2,3])
/* customEmitter.emit('response', 'Elías')
customEmitter.emit('response', 30)
customEmitter.emit('response', [1,2,3])
customEmitter.emit('response', {name: 'Elías'}) */