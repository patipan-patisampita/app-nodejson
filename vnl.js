const fs = require('fs')
const vnl2022 = {
    team: "Thailand",
    score: 205,
    rank: 14
}
// console.log(vnl2022)
// const jsonData = JSON.stringify(vnl2022)
// console.log(jsonData)
// const objData = JSON.parse(jsonData)
// console.log(objData)

const jsonData = JSON.stringify(vnl2022)
fs.writeFile("vnl2022.json", jsonData, (err) => {
    console.log("done")
})

fs.readFile("vnl2022.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data)
    console.log(data)
    console.log(orgData)
})