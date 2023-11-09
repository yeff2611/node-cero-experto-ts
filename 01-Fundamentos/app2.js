const fs = require('fs')
const Data = fs.readFileSync('README.md', 'utf-8')

const wordCount = Data.split(' ')
const wordCountReactExp = Data.match(/react/gi ?? [])
const wordCountReact = wordCountReactExp === null ? wordCountReactExp : wordCountReactExp.length
//const wordCountReact = wordCount.filter(word => word.toLowerCase().includes('react'))

console.log('Cantidad de palabras del Readme:', wordCount.length)
console.log('Cantidad de palabras de React:', wordCountReact)