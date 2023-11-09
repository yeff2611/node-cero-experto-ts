const axios = require('axios');

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

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        // console.log(data);
        return data
    }
}

module.exports = {
    http: httpClientPlugin,
}