const validator = require('validator')

console.log(validator.isEmail('example.com'))
console.log(validator.isEmail('abcd@example.com'))

console.log(validator.isURL('wwww.abc.com'))