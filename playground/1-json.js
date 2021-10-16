// const fs=require('fs')

// const book={
//     title: 'Concept of Physics',
//     author: 'H.C. Verma'
// }

// const bookJSON=JSON.stringify(book)

// // fs.writeFileSync('1-json.json',bookJSON)
// const dataBuffer=fs.readFileSync('1-json.js')
// console.log(dataBuffer)


// const fs=require('fs')
// const buffer=fs.readFileSync('1-json.json')  // retured a buffer value
// const tostring=buffer.toString()  // converted to  JSON
// console.log(tostring)
// const user=JSON.parse(tostring)   // converted to a Javascript object
// user.name='Priyansh Singh'
// user.age=21
// user.planet="Earth"
// const userJSON=JSON.stringify(user)       // converted object back to string
// fs.writeFileSync('1-json.json',userJSON)

const fs=require('fs')
const buffer=fs.readFileSync('1-json.json')
const data=buffer.toString()
const user=JSON.parse(data)
user.name="Priyansh Singh"
user.planet="Earth"
user.age=21
const userJSON=JSON.stringify(user)
// console.log(userJSON)
fs.writeFileSync('1-json.json',userJSON)