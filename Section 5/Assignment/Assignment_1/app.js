const express = require('express');

const app = express();

/*app.use((req, res, next) => {
    console.log('First middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Second middleware');
    res.send('<h1>Second Middleware</h1>');
});*/

app.use('/users', (req, res, next) => {
    console.log('Users');
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Middleware');
    res.send('<h1>Middleware</h1>');
});

app.listen(3000);