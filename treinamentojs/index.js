const express = require( 'express')
const app = express()
const port = 3000
const fs = require("fs");

app.get('/', (req,res)=> { res.send('hello world!')})

app.get("/html", (req, res)=> {fs.readfile(__dirname + "/index.html", "utf8", (err, text)=> 
{ res.send(text);
});
}); 
app.listen(port,()=>{console.log(`Example app listening on port ${port}`)});

