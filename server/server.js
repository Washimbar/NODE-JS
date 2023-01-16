const http = require('http');
const hostName = '127.0.0.1';
const port = 8080;
const myServer = http.createServer((req, res)=>{
    res.end('<h1>Welcome</h1>');
});
myServer.listen(port , hostName , ()=>{
    console.log(`Server is running on port http://${hostName}:${port}`);
});
