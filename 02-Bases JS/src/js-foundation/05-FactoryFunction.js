// const { getUUID } = require('../plugins/get-uuid.plugin')
// const { getAge } = require('../plugins/get-age.plugin')
// const { getUUID, getAge } = require('../plugins')

//Creamos la factoryFunction
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
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

module.exports = {
    buildMakePerson,
}