// Desestructuración de Arreglos de JS
console.log('Practica de Desestructuración de arreglos...');

// forma tradicional de referenciar elementos de un arreglo
const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );


// utilizando desesctructuración de arreglos
const [ p1 ] = personajes;
console.log( p1 );

const [ , p2 ] = personajes;
console.log( p2 );


// otro ejemplo
const retornaArray = () => {
    return ['ABC', 123];
}

const arr = retornaArray(); // retorna todo el arreglo
console.log( arr );

const [ letras, numeros ] = retornaArray();
console.log( letras, numeros );


// otro ejercicio
const useState = ( valor ) => {
    return [ valor, () => console.log( 'Hola Mundo' )];
}

const arr2 = useState( 'Goku ');
console.log( arr2 );
arr2[1]();  // forma extraña de llamar el segundo elemento del arreglo

// tarea: mostrar los valores nombre y setNombre del arreglo
const [ nombre, setNombre ] = useState( 'Goku' );
console.log( nombre );
setNombre();