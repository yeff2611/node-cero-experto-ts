"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
// destrcturing
const { USERDOMAIN, USERNAME, NUMBER_OF_PROCESSORS } = process.env;
// console.table({ USERDOMAIN, USERNAME, NUMBER_OF_PROCESSORS })
exports.characters = ['flash', 'superman', 'batman', 'Wonder Woman'];
const [f, s, b] = exports.characters;
// console.log(b);
