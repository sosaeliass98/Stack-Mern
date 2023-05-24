//El modulo path nos permite trabajar con carpetas y archivos

//Si no voy a modificar los valores que voy a utilizar, los guardo en const
const path = require('path')

//Permite unir rutas de directorios o carpetas
const filePath = path.join('/public', 'dist', 'styles', 'main.css')

// Con el modulo path podemos ejecutar cierta logica dependiendo del sistema que usemos

console.log(filePath)
console.log(path.basename(filePath))
console.log(path.dirname(filePath))
console.log(path.parse(filePath))

//Resolve lo que hace es completar la ruta completa
console.log(path.resolve('dist'))


