const http = require('http');

const server = http.createServer( (request, response) => {
    // console.log('headers: ', request.headers);
    console.log('url: ', request.url);
    console.log('method: ', request.method);

    const user= {
        name: 'John',
        hobby: 'Dancing'
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
});

server.listen(3001);