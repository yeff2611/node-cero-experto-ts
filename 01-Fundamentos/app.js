const fs = require('fs')
const Data = fs.readFileSync('README.md', 'utf-8')

const newData = Data.replace(/React/ig, 'Angular')

fs.writeFileSync('README-Angular.md', newData)