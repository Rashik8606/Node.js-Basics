var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    fs.readFile('ServerResponse/index.html',function(err,data){
        if(err){
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error loading the HTML file");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(data)
        res.end()
    })
    
}).listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
})