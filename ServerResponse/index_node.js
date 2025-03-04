var http = require('http')
var fs = require('fs')

http.createServer(function ServerResponse (req,res){
    fs.readFile('ServerResponse/index.html',function HtmlPage (err,data){
        if (err){
            res.writeHead(500,{'content-type':'text/html'})
            res.end('error loading html page')
            return
        }
        if(req.url==='/'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        }else if(req.url==='/login'){
            res.write('Login Page')
            res.end()
        }else{
            res.writeHead(404, {'content-type':'text/html'})
           
            res.end()
        }
        
    })
   
}).listen(4000 ,() => {
    console.log('server Running at  http://localhost:4000')
})