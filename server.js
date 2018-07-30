const http = require('http');
const port = 8080;

function handleRequest(request, response) {
    const path = request.url;

    switch (path) {
        case "/home":
            displayRoot(request, response);
            break;
        default:
            response.writeHead(404);
            response.end();
            break;
    }
};

function displayRoot(req, res) {
    const html = `
    <html>
        <body>
            <h1>Learn Heroku</h1>
        </body>
    </html>
    `;
    res.end(html);
}

const server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});