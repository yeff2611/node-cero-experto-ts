console.log('---------------------------------');
console.log('EJERCICIO ARROWS');
console.log('---------------------------------');

interface User {
    id: number;
    name: string;
}

const users: User[] = [
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
const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {
    const user = users.find((user) => user.id === id);

    // condicional ternario
    (user)
        ? callback(undefined, user)
        : callback(`User not found with id ${id}`);

    // if (!user) return callback(`User not found with id ${id}`);

    // return callback(null, user)
}

// module.exports = {
//     getUserById
// }