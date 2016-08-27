var express = require('express');
var app  = express();


app.get('/',function(req,res){
    res.send("hello modulus");
});


app.get('/time',function(req,res){
    res.send("current modulus time" + new Date().toString());
});


app.listen(8080);
console.log("hello modulus app started on port 8080");