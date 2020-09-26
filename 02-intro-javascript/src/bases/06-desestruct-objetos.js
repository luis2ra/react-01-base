// Desestructuración de Objetos de JS
console.log('Practica de Desestructuración de objetos...');

// forma tradicional de referenciar elementos de un objeto
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.clave );

// lo nuevo
const woman = {
    name: 'Flor',
    age: 25,
    key: 'Flower'
};

// forma 1
const { name:nombre2, age, key } = woman;
console.log( nombre2 );
console.log( age );
console.log( key );


// forma 2
const returnWoman = ( mujer ) => {
    console.log( mujer );
}
returnWoman( woman );


// forma 2 otra variante
const returnWoman2 = ( mujer ) => {
    const { key, age, name, } = mujer;

    console.log( name, age, key );
}
returnWoman2( woman );


// forma 3: desustructar el objeto en el argumeto de la función
const returnWoman3 = ({ name, age  }) => {
    
    console.log( name, age );
}
returnWoman3( woman );


// forma 4: definir parámetros adicionales del objeto
// Si no existe la propiedad, se puede hasta asignar un valor por defecto
const returnWoman4 = ({ name, age, rangoDemo = 10.0, valorNone  }) => {
    
    console.log( name, age, rangoDemo, valorNone );
}
returnWoman4( woman );


// forma 5: otro uso de la forma desustructurada de un objeto
const useContext = ({ key, name, age, rangoDemo = 10.0 }) => {
    
    //console.log( name, age, key, rangoDemo );
    return {
        nombreClave: key,
        anios: age
    }
}
// const whois = useContext( woman );
// console.log( whois );
const { nombreClave, anios } = useContext( woman );
console.log( nombreClave, anios );


// caso especial: un objeto que contiene otro objeto
console.log("caso especial: un objeto que contiene otro objeto");
const useContext2 = ({ name }) => {
    
    return {
        nombreActual: name,
        coord: {
            lat: -36.848466,
            lon: 174.762168
        }
    }
}
// para ver el objeto completo
const { nombreActual: nombreClave2, coord: coordenadas } = useContext2( woman );
console.log( nombreClave2, coordenadas );

// para ver los elementos del objeto anidado
const { nombreActual: nombreClave3, coord: { lat, lon } } = useContext2( woman );
console.log( nombreClave3, lat, lon );