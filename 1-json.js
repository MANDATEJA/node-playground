const fs = require('fs')

const data = {
    name: "Vishwas",
    age: 25,
    colour: "Blue"
}

const dataJSON = JSON.stringify(data)
console.log(dataJSON)
fs.writeFileSync('data.json',dataJSON)

// const dataBuffer = fs.readFileSync('data.json')
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON)
// const data = JSON.parse(dataJSON)
// console.log(data)