//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/* Express.js */
const app = express();
/*app.use( (req, res, next) => {
    console.log('In the moddleware!');
    next(); // Allows the request to continue to the next middleware in line
});*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    //res.status(404).send('<h1>Page not found!</h1');
});

/*app.use('/', (req, res, next) => {
    //console.log('This always runs!');
    next();
});*/

/* Create Server */
//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);