// Práctica de Promise de JS
console.log('Practica de Promesas...');

const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
        resolve();
        //console.log('02 segundos después')
    }, 2000 )
});

promesa.then( () => {
    console.log('Then de la promesa')
});