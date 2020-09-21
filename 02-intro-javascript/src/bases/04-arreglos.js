// Arreglos
console.log('Practica de Arreglos...');

// Los arreglos se identifican con [], que equivale a las listas en Python
const arreglo = new Array(10);
arreglo.push(1);
console.log( arreglo );

const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);
// tutor: no se recomienda utilizar el operador push para insertar
// elementos a un arreglo, ya que modifica el objeto principal.
// recordar que en JS los arreglo son objetos
// en vez de usar push, se usa el operador XXXXX
console.log( arreglo2 );

const arreglo3 = [ 1, 2, 3, 4 ];
let arreglo4 = arreglo3;    // este no es una copia, se una referencia del original
arreglo4.push(5);

// se corrobora que ambos arreglos se modificaron
console.log( arreglo3 );
console.log( arreglo4 );

const arreglo5 = [ 1, 2, 3, 4 ];

// uso de sintaxis de propagación (spread syntax)
let arreglo6 = [ ...arreglo5, 5 ];
console.log( arreglo5 );
console.log( arreglo6 );

// uso de 'map'
let arreglo7 = arreglo6.map( function(numero) {
    // return "hola"
    return numero * 2;
});
// no colocar nada arroja 'undefined' por cada el elemento del arreglo
// se probó con el return "hola" para redireccionar la salida de la función

console.log( arreglo7 );
console.log( arreglo6 ); // se constata que no se modifica el arreglo inicial


