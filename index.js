const http = require('http')
const hostname = 'localhost'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        //set response header
        res.writeHead(200, { 'Content-Type': 'text/html' })
        //set response content
        res.write(`<html><body><p>This is home page.</p></body></html>`)
        res.end()
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<html><head><body><p>This is contact Page.</p></body></head></html>`)
        res.end()
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})