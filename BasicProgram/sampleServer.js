var http = require('http')
http.createServer(function clintSide(req,res){
    res.write('Clint Side Response')
    res.end()
}).listen(4000)
