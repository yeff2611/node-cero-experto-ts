"use strict";
// const axios = require('axios');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
// axios.get('/user?ID=12345')
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('App finalizada');
//     })
//!Petición hecha con parámetros
// axios.get('/user', {
//     params: {
//         ID: 12345
//     }
// })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('App finalizada');
//     })
// async function getUser() {
//     try {
//         const response = await axios.get('/user?ID=12345');
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUser()
// const httpClientPlugin = {
//     get: async (url) => {
//         const response = await fetch(url);
//         return await response.json();
//     },
//     post: async (url, body) => { },
//     put: async (url, body) => { },
//     delete: async (url, body) => { }
// }
exports.httpClientPlugin = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get(url);
        // console.log(data);
        return data;
    }),
    post: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented');
    }),
    put: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented');
    }),
    delete: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented');
    })
};
// module.exports = {
//     http: httpClientPlugin,
// }
