const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('welcome')
    }
    if (req.url == '/about') {
        res.end('about page ')
    }

    res.end(`
    <h1>oops</h1>
    `)
})

server.listen(5000);
