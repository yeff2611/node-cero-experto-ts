console.log(process.env);

// destrcturing
const { USERDOMAIN, USERNAME, NUMBER_OF_PROCESSORS } = process.env

console.table({ USERDOMAIN, USERNAME, NUMBER_OF_PROCESSORS })

const characters = ['flash', 'superman', 'batman']

const [f, s, b] = characters
console.log(b);