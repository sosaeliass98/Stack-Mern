import {add,subtract,divide,multiply} from './math/mathModule.js'

/* const math = require('./math/mathModule.js') */

import math, {add,divide,multiply,subtract} from "./math/mathModule.js"

/* console.log(add(30,20))
console.log(subtract(30,20))

 */

console.log(math(30,20))

// Para utilizar esta sintaxis estandar de ecmascript lo que debo hacer
// Es agregar al package.json un nuevo modulo llamado 
// "type": "module",