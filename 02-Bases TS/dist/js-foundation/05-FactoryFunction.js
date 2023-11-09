"use strict";
// const { getUUID } = require('../plugins/get-uuid.plugin')
// const { getAge } = require('../plugins/get-age.plugin')
// const { getUUID, getAge } = require('../plugins')
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
//Creamos la factoryFunction
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'Yeff', birthdate: '1990-01-27' }
// const yeffPerson = buildPerson(obj)
// console.log(yeffPerson);
// module.exports = {
//     buildPerson
// }
// module.exports = {
//     buildMakePerson,
// }
