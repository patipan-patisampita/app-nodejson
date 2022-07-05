const http = require('http')
const hostname = 'localhost'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.write("Welcome")
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})