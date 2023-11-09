"use strict";
// const { http } = require('../plugins')
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const plugins_1 = require("../plugins");
//!Trabajando con fetchApi
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield plugins_1.http.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
});
exports.getPokemonById = getPokemonById;
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
