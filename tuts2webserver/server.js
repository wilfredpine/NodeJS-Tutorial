const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // get request
    console.log(req.url, req.method);
    // set header
    res.writeHead(200, {'Content-Type': 'text/html'});

    //ROUTING
    let path = './views/';
    switch(req.url)
    {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            //res.end(data);
            //or 
            res.end(data);
        }
    });
});
server.listen(8080, 'localhost', () => {
    console.log("Listening for request on port 8080");
});
