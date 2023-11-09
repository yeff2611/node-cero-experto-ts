console.log('---------------------------------');
console.log('EJERCICIO CALLBACKS');
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
function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(null, user)
}

module.exports = {
    getUserById
}