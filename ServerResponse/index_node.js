var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function ServerResponse (req,res){
    fs.readFile('ServerResponse/index.html',function HtmlPage (err,data){
        var q = url.parse(req.url,true)
        if (err){
            res.writeHead(500,{'content-type':'text/html'})
            res.end('error loading html page')
            return
        }
        if(q.pathname==='/'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()
        }else if(q.pathname==='/login'){
            fs.readFile('ServerResponse/index_2.html',function HtmlLogin (err,data){
                res.write(data)
                res.end()
            })

        }else if (q.pathname==='/backtopage'){
            fs.readFile('ServerResponse/index.html',function backToPage (err,data){
                res.writeHead(200, {'content-type':'text/html'})
                res.write(data)
                res.end()
            })
            
        }else{
            res.writeHead(404,{'content-type':'type/html'})
            res.end()
        }
           
        }  
    )
   
}).listen(4000 ,() => {
    console.log('server Running at  http://localhost:4000')
})