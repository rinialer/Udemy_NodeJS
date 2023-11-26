const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const usersRoute = require('./routes/users');
const mainRoute = require('./routes/main');

app.use(usersRoute);
app.use(mainRoute);

app.listen(3000);