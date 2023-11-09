// const { http } = require('../plugins')

import { http } from "../plugins";



//!Trabajando con fetchApi

export const getPokemonById = async (id: string | number): Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await http.get(url)
        return pokemon.name

    } catch (error) {
        throw `Pokemon not found with id ${id}`
    }
}


//!Trbajando con AsyncAwait
// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     // la promesa no continúa hasta que no se resuelva el fetch que tiene el await
//     const response = await fetch(url);
//     const pokemon = await response.json()
//     // throw new Error('Pokemon no existe')
//     return pokemon.name
// }


// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     return fetch(url)
//         .then((response) => response.json())
//         // .then(() => { throw new Error('Pokemon no existe') })
//         .then((pokemon) => pokemon.name)
// }

//!Trabajando la promesa con callback
// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     fetch(url)
//         .then((response) => response.json())
//         .then((pokemon) => callback(pokemon.name))
// }

//!Modo no aconsejable
// const getPokemonById = (id, callback) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     fetch(url).then((response) => {
//         response.json().then((pokemon) => {
//             // console.log(pokemon.name);
//             callback(pokemon.name)
//         })
//     })
// }

// module.exports = {
//     getPokemonById
// }