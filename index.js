// HTTP SERVER running our html pages on http server node js

const http = require('http');
const fs = require('fs');

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     const html = fs.readFileSync('./home.html');
//     const about = fs.readFileSync('./about.html');
//     const contact = fs.readFileSync('./contact.html');
//     res.end(html);
// }).listen(3000, () => {
//     console.log('running on port 3000');
// });



let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if (request.url == '/home.html' || request.url == '/') {
        fs.readFile('./home.html', null, function(error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    } else if (request.url == '/about.html') {
        fs.readFile('./about.html', null, function(error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    } else {
        fs.readFile('./contact.html', null, function(error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
};
http.createServer(handleRequest).listen(3000);