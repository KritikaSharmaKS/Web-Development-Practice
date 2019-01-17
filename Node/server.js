const http = require('http');

const server = http.createServer(()=>{
    console.log("Server Started!:)");
});

server.listen(3001);