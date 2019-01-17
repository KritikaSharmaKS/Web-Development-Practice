const http = require('http');

const server = http.createServer( (request, response) => {
    // console.log('headers: ', request.headers);
    console.log('url: ', request.url);
    console.log('method: ', request.method);


    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello World!</h1>');
});

server.listen(3001);