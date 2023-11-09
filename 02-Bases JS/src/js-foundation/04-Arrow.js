console.log('---------------------------------');
console.log('EJERCICIO ARROWS');
console.log('---------------------------------');

const users = [
    {
        id: 1,
        name: 'Jhonn Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

// sintaxis sin arrow functions
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    // condicional ternario
    (user)
        ? callback(null, user)
        : callback(`User not found with id ${id}`);

    // if (!user) return callback(`User not found with id ${id}`);

    // return callback(null, user)
}

module.exports = {
    getUserById
}