// const { v4: uuidv4 } = require('uuid')

import { v4 as uuidv4 } from 'uuid'


export const getUUID = () => {
    return uuidv4()
}

// module.exports = {
//     getUUID
// }