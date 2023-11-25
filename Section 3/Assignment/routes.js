const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        let html = '<html><head><title>Welcome to the first assignment page!</title></head>';
        html += '<body><form action="/create-user" method="POST"><input type="text" name="username"><button>Send</button></form></body></htm>';
        res.write(html);
        return res.end();
    }
    if (url === '/users') {
        let html = '<html><head><title>Users list</title></head>';
        html += '<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>';
        res.write(html);
        return res.end();
    }
    if (url === '/create-user' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
};

module.exports.handler = requestHandler;