"use strict";
// const { getUUID, getAge } = require('./plugins')
// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const { getUserById } = require('./js-foundation/03-callbacks')
// const { getUserById } = require('./js-foundation/04-Arrow')
// const { buildMakePerson } = require('./js-foundation/05-FactoryFunction')
// import { getPokemonById } from "./js-foundation/06-promises";
// import { buildLogger } from "./plugins/logger.plugin";
// const { getPokemonById } = require('./js-foundation/06-promises')
// const logger = buildLogger('app.js')
// logger.log('Hello World')
// logger.error('Ha ocurrido un error')
// getPokemonById(3)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((err) => console.log({ err }))
//     .finally(() => console.log('App finalizada'))
// getPokemonById(3)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((err) => console.log({ err }))
//     .finally(() => console.log('Finalmente'))
// const info = getPokemonById(1);
// console.log(info);
// setTimeout(() => {
//     console.log(info)
// }, 3000);
//! Referencia a la función factory y uso
//Invocamos la factory function y le llevamos como argumentos los plugins
// const makePerson = buildMakePerson({ getUUID, getAge })
// const obj = { name: 'Yeff', birthdate: '1990-01-27' }
// const yeff = makePerson(obj)
// console.log({ yeff });
// console.log(emailTemplate);
// const id = 2;
// getUserById(id, (error, user) => {
//     if (error) throw new Error(error)
//     console.log(user);
// })
