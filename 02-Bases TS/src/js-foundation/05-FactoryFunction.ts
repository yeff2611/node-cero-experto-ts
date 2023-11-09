// const { getUUID } = require('../plugins/get-uuid.plugin')
// const { getAge } = require('../plugins/get-age.plugin')
// const { getUUID, getAge } = require('../plugins')


interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

//Creamos la factoryFunction
export const buildMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => {
    return ({ name, birthdate }: PersonOptions) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
            age: getAge(birthdate)
        }

    }

}
// const obj = { name: 'Yeff', birthdate: '1990-01-27' }
// const yeffPerson = buildPerson(obj)

// console.log(yeffPerson);

// module.exports = {
//     buildPerson
// }

// module.exports = {
//     buildMakePerson,
// }