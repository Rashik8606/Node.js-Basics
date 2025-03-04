var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser');



app.use((req,res,next)=>{
    console.log('Hello')
    next()
})
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))

})
app.post('/submit',(req,res)=>{
    const  { firstname, lastname, number } = req.body;
    console.log('Received Data:');
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Phone Number:', number);
    res.send(`Data Received: ${firstname} ${lastname}, Phone: ${number}`)

})

app.get('/about',(req,res)=>{
    res.send('Its me About ')
})
app.listen(3000,()=>{
    console.log(__dirname)
    console.log('Server running on http://localhost:3000` Started')
})