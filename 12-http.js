const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/')
    {
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about')
    {
        res.end('Welcome to our about section')
    }
    res.end(`
    
        <H1>Ooops!</H1>
        <p>Could not load resource</p>
        <a href="/">Go to HomePage</a>
    
    `)
})

server.listen(5000)