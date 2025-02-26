// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  let mayuscula = nombre[0].toUpperCase() + nombre.slice(1)
  return mayuscula
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()        //sin return antes del cb!
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma = numeros.reduce(function (acumulador, elemento) {
    return acumulador + elemento             // aqui devuelve el resultado final del acumulador en cada vuelta
  }, 0)    // este indica de donde inicia el acumulador
  cb(suma)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);           //Sin return antes del cb!
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
    newArray[i] = cb(array[i]);
  }
  return newArray
  //     Otra forma 
  //var nuevoArray = array.map(function(el) {
  // return cb(el);
  //});
  //return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === "a") {
      nuevoArr.push(array[i])
    }
  }
  return nuevoArr
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
