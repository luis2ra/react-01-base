// Template String - backtick - back quote - `
console.log('Practica de Template String...');

const nombre = "Luis";
const apellidos = "Altuve Cáceres";

const nombreCompleto = nombre + ' ' + apellidos;
console.log( nombreCompleto );

const nombreCompleto2 = `${nombre} ${apellidos}`;
console.log( nombreCompleto2 );

const nombreCompleto3 = `
${ nombre }
${ apellidos }
${ 1 + 1 }
`;

console.log( nombreCompleto3 );

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo(nombre) }`)