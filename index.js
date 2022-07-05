const http = require('http')
const hostname = 'localhost'
const fs = require('fs')

const port = process.env.PORT || 5000

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
    else if(req.url == '/userapi'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(`${__dirname}/Userapi/userapi.json`,"utf-8",(err,data)=>{
            //console.log(data)
            res.end(data)
        })
        //res.write(`<html><head><body><h1>Hello From the vnl2021.</h1></body></head></html>`)
        
    }
    else {
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("<h1>404 error page.Page doesn't exist</h1>")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}`)
})