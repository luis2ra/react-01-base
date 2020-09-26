// Práctica de Import, Export y funciones comunes de arreglos de JS
// import { heroes } from './data/heroes';

// para la exportación por defecto no hace falta incluir {}
import heroes, { owners } from './data/heroes';

// para la exportación de varios objetos
// import { heroes, owners } from './data/heroes';

console.log('Practica de Import, Export y ...');

console.log( heroes );
console.log( owners );

const getHeroesById = (id) => {
    return heroes.find( element => element.id === id);
}

console.log( getHeroesById(3));

const getHeroesByOwner = ( owner ) => {
    return heroes.filter( valueSearch => valueSearch.owner === owner );
}

console.log( getHeroesByOwner( 'Marvel' ));

