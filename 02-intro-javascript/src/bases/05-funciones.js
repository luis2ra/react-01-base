// Funciones de JS
console.log('Practica de Funciones de Javascript...');

// esta no es una forma recomendada para definir funciones
// la tendencia es hacer una modificación en el código perdiendo la 
// referencia a la función
function saludar(nombre) {
    return `Hi, ${ nombre }`;
}
console.log( saludar );
console.log( saludar( 'Flower') );

// acá se intenta asignar un valor a algo previamente definido como función
// saludar = 30;

// Definiendo una función de forma correcta según el tutor
const saludar2 = function( nombre ) {
    return `Hi, ${ nombre }`;
}
console.log( saludar2 );
console.log( saludar2( 'Luis' ) );
// acá se intenta asignar un valor a algo previamente definido como función
// al definir saludar2 como una constante arroja un error explícito
// saludar2 = 44;

// Es importante notar la diferencia de la definición de las funciones
// saludar y saludar2 en la pestaña Console del navegador

// transformando a una función flecha
const saludar3 = ( nombre ) => {
    return `Hi, ${ nombre }`;
}
console.log( saludar3 );

// transformando a una función flecha simplificada (que solo tenga un return)
const saludar4 = ( nombre ) => `Hi, ${ nombre }`;
console.log( saludar4 );

// transformando a una función flecha simplificada (sin argumento)
const saludar5 = () => `Hi, World`;
console.log( saludar5 );


// algo sumamente usado en react
const getUser = () => ({
    uid: 'ABC123',
    username: "El usuario"
});
const user = getUser();
console.log( user );

// solución de tarea final del video
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: 'Luis Altuve'
});
const user2 = getUsuarioActivo();
console.log( user2 );