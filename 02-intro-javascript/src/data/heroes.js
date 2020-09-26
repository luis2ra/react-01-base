// export const heroes = [     // forma inicial de exportar un arreglo/objeto
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


// *** Esta es una forma de manejar las exportaciones de forma individual
// export default heroes;
// export const owners = ['DC', 'Marvel'];

const owners = ['DC', 'Marvel'];

// *** Esta es una forma de combinar en un objeto las exportaciones a realizar
export {
    heroes as default, 
    owners
}