"use strict";
// const getAgePlugin = require('get-age')
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    // if (!birthdate) return new Error('birthdate is required')
    // return getAgePlugin(birthdate)
    // console.log({ birthdateYear: new Date(birthdate).getFullYear() });
    // console.log({ currentYear: new Date().getFullYear() });
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
// module.exports = {
//     getAge
// }
