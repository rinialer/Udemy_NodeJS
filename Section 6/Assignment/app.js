const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const addUsers = require('./routes/addUsers');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', users.routes)
app.use('/', addUsers.routes);

app.listen(3000);