const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const url = require("url")

const server = http.createServer((req, res)=> {
const reqUrl = url.parse(req.url).pathname 
if (req.method == "GET") {
if (reqUrl =="/"){
    res.write("you're boring");
    res.end();

    
    
        if (reqUrl =="/ola") {
            res.write("Eu tambem");
            res.end();





 }
} else if (req.method == "POST"){
    if (reqUrl == "/hello") {
        res.write("hello world")
        res.end()
    }
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  